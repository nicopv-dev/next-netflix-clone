import React from 'react'
import Head from 'next/head'

interface IHeadTitleProps {
  title: string
}

export default function HeadTitle({ title }: IHeadTitleProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
