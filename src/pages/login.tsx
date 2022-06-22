import { GetServerSideProps, NextPage } from 'next'
import MainContent from '../components/MainContent'
import MainLayout from '../layouts/MainLayout'
import { getProviders } from 'next-auth/react'

import { signIn, signOut } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'

const Login: NextPage = ({ providers }) => {
  const [providers, setProviders] = useState([])
  const getProvs = useCallback(async () => {
    setProviders(await getProviders())
  }, [providers])

  useEffect(() => {
    getProvs()
  }, [])

  return (
    <MainLayout title="Login - Netflix">
      <MainContent>
        <div className="z-0 flex max-w-4xl flex-col items-center">
          {Object.values(providers).map((provider) => (
            <button
              key={provider.id}
              className="bg-netflix px-4 py-1 text-lg text-white"
              type="button"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Login with {provider.name}
            </button>
          ))}
        </div>
      </MainContent>
    </MainLayout>
  )
}

export default Login
