import { useSession } from 'next-auth/react'
import HeadTitle from '../components/HeadTitle'
import Footer from '../components/Navigation/Footer'
import Header from '../components/Navigation/Header'

interface User {
  email: string
  name: string
  image: string
}

interface IMainLayoutProps {
  children: JSX.Element
  title: string
}

export default function MainLayout({ children, title }: IMainLayoutProps) {
  const { status } = useSession()

  return (
    <div className="gradient-to-b">
      <HeadTitle title={title} />
      {status === 'loading' ? (
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      ) : (
        <>
          {/* HEADER */}
          <Header />

          {/* CONTENT  */}
          {children}

          {/* FOOTER */}
          <Footer />
        </>
      )}
    </div>
  )
}
