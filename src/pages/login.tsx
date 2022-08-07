import { GetServerSideProps, NextPage } from 'next'
import MainContent from '../components/MainContent'
import MainLayout from '../layouts/MainLayout'
import { getProviders, getSession } from 'next-auth/react'

import { signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'

const Login: NextPage = ({ providers, session }) => {
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

export async function getServerSideProps(context): GetServerSideProps {
  const providers = await getProviders()
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }

  return {
    props: {
      providers,
      session,
    },
  }
}
