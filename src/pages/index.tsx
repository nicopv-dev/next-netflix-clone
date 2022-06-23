import type { GetServerSideProps, NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useAppSelector } from '../app/hooks'

import Dashboard from '../components/Dashboard'
import Info from '../components/Info'
import MainContent from '../components/MainContent'
import MainLayout from '../layouts/MainLayout'
import { selectUser } from '../slices/userSlice'
import { Movie } from '../types'
import requests from '../utils/requests'

interface IHomeProps {
  trendingNow?: Movie[]
  trendingMovies: Movie[]
  trendingSeries: Movie[]
  error: boolean
}

const DATA: Movie[] = [
  {
    id: 66732,
    backdrop_path: '/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    name: 'Stranger Things',
    genre_ids: [10765, 18, 9648],
    original_language: 'en',
    poster_path: '/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    vote_count: 10770,
    vote_average: 8.6,
    original_name: 'Stranger Things',
    origin_country: ['US'],
    overview:
      'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
    first_air_date: '2016-07-15',
    popularity: 3615.323,
    media_type: 'tv',
  },
  {
    original_name: 'Obi-Wan Kenobi',
    origin_country: ['US'],
    overview:
      'During the reign of the Galactic Empire, former Jedi Master, Obi-Wan Kenobi, embarks on a crucial mission to confront allies turned enemies and face the wrath of the Empire.',
    vote_count: 251,
    id: 92830,
    backdrop_path: '/8H64YmIYxpRJgSTuLUGRUSyi2kN.jpg',
    vote_average: 8.2,
    genre_ids: [10765, 10759, 18],
    name: 'Obi-Wan Kenobi',
    original_language: 'en',
    first_air_date: '2022-05-26',
    poster_path: '/qJRB789ceLryrLvOKrZqLKr2CGf.jpg',
    popularity: 2020.026,
    media_type: 'tv',
  },
]

const Home = ({
  trendingNow,
  trendingMovies,
  trendingSeries,
  error,
}: IHomeProps) => {
  const { data: session } = useSession()
  const { isAuth } = useAppSelector(selectUser)

  useEffect(() => {
    console.log(session)
  }, [])

  return (
    <MainLayout title="Netflix - Home">
      {session ? (
        <Dashboard
          trendingNow={!error ? trendingNow : DATA}
          trendingMovies={trendingMovies}
          trendingSeries={trendingSeries}
        />
      ) : (
        <Info />
      )}
    </MainLayout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [trendingNow, trendingMovies, trendingSeries] = await Promise.all([
      fetch(requests.fetchAllTrending).then((res) => res.json()),
      fetch(requests.fetchTrendingMovies).then((res) => res.json()),
      fetch(requests.fetchTrendingSeries).then((res) => res.json()),
    ])
    return {
      props: {
        trendingNow: trendingNow?.results,
        trendingMovies: trendingMovies?.results,
        trendingSeries: trendingSeries?.results,
        error: false,
      },
    }
  } catch (e) {
    return {
      props: {
        error: true,
      },
    }
  }
}
