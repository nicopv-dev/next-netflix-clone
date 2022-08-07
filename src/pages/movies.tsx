import MainLayout from '../layouts/MainLayout'
import Slider from 'react-slick'
import { GetServerSideProps } from 'next'
import requests, { getImageUrl } from '../utils/requests'
import { Movie } from '../types'
import { getSession } from 'next-auth/react'

interface IMoviesProps {
  movies: Movie[]
  error?: boolean
  message?: string
}

const Movies = ({ movies }: IMoviesProps) => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 3,
    speed: 2000,
    pauseOnHover: true,
    cssEase: 'linear',
  }

  return (
    <MainLayout title="Movies - Netflix">
      <div className="mt-24 min-h-screen space-y-4 px-10">
        {/* header */}
        <div>
          <h1 className="text-3xl font-semibold text-white">Movies</h1>
        </div>
        {/* slider */}
        <div>
          <Slider {...settings}>
            {movies.map((movie, index) => (
              <div key={index} className="mr-2 h-auto">
                <img
                  alt={movie.title}
                  src={getImageUrl(movie.poster_path)}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </MainLayout>
  )
}

export default Movies

export const getServerSideProps: GetServerSideProps = async (contenxt) => {
  const session = await getSession(contenxt)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    }
  }

  try {
    const data = await fetch(requests.fetchPopularMovies).then((res) =>
      res.json()
    )
    return {
      props: {
        movies: data?.results,
      },
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        error: true,
        message: 'Error en el servidor',
      },
    }
  }
}
