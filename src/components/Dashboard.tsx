import { GetServerSideProps } from 'next'
import requests from '../utils/requests'
import Banner from './Banner'
import Row from './Row'

interface IDashboardProps {
  trendingNow: Movie[]
  trendingMovies: Movie[]
  trendingSeries: Movie[]
}

export default function Dashboard({
  trendingNow,
  trendingMovies,
  trendingSeries,
}: IDashboardProps) {
  return (
    <div className="gradient-to-b relative">
      {/* Banner */}
      <Banner movies={trendingNow} />
      {/* Main content */}
      <section className="my-4 flex flex-col gap-6 pl-10">
        <Row movies={trendingNow} title="Trending" />
        <Row movies={trendingMovies} title="Trending Movies" />
        <Row movies={trendingSeries} title="Trending Tv Shows" />
        <Row movies={trendingNow} title="Trending" />
        <Row movies={trendingMovies} title="Trending Movies" />
      </section>
      {/* Modal */}
    </div>
  )
}
