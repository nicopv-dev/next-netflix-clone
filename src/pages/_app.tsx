import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
// redux store
import { store } from '../app/store'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
