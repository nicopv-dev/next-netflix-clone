import type { NextApiRequest } from 'next'
import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'
import { NextResponse } from 'next/server'

export default async function middleware(req) {
  console.log('middleware...')
  return NextResponse.next()
}
