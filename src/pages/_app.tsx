import '../styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
// redux store
import { store } from '../app/store'
import { SessionProvider } from 'next-auth/react'
import { AnimatePresence } from 'framer-motion'
import { useProgressStore } from '../store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Progress } from '../components/progress'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating)
  const isAnimating = useProgressStore((state) => state.isAnimating)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }
    const handleStop = () => {
      setIsAnimating(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <AnimatePresence exitBeforeEnter>
          <Progress isAnimating={isAnimating} />
          <Component {...pageProps} />
        </AnimatePresence>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
