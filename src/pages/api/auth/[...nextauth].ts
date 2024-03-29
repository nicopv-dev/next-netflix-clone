import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import { db } from '../../../config/firebase'
import * as firestoreFunctions from 'firebase/firestore'
import { signIn } from 'next-auth/react'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
  ],
  adapter: FirebaseAdapter({
    db,
    ...firestoreFunctions,
  }),
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) token.accessToken = account.access_token
      return {
        ...token,
        accessTokenExpires: account.expires_at * 1000,
      }
      return token
    },
    async session({ session, token, user }) {
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
})
