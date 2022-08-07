import { useSession } from 'next-auth/react'
import requests from '../utils/requests'
import Banner from './Banner'
import Row from './Row'
import { Movie, Serie } from '../types'

interface IDashboardProps {
  trendingNow: Movie[]
  trendingMovies: Movie[]
  trendingSeries: Movie[]
  topRatedSeries: Serie[]
  topRatedMovies: Movie[]
  error?: boolean
}

export default function Dashboard({
  trendingNow,
  trendingMovies,
  trendingSeries,
  topRatedSeries,
  topRatedMovies,
  error,
}: IDashboardProps) {
  const { data } = useSession()

  return (
    <div className="relative">
      {/* Banner */}
      <Banner movies={trendingNow} />
      {/* Main content */}
      <section className="my-10 flex flex-col gap-8 pl-10 sm:my-4">
        <Row movies={trendingNow} title="Trending" />
        <Row movies={trendingMovies} title="Trending Movies" />
        <Row movies={trendingSeries} title="Trending TV Shows" />
        <Row movies={topRatedMovies} title="Top Rated Movies" />
        <Row movies={topRatedSeries} title="Top Rated Series" />
      </section>
      {/* Modal */}
    </div>
  )
}
