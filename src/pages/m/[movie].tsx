import { GetServerSideProps } from 'next'
import MainLayout from '../../layouts/MainLayout'
import { Movie, Image, Video, Cast, Review } from '../../types'
import requests, { getImageUrl } from '../../utils/requests'
import Slider from 'react-slick'
import { ChevronRightIcon } from '@heroicons/react/outline'
import {
  PlusIcon as PlusIconSolid,
  VideoCameraIcon as VideoCameraSolid,
} from '@heroicons/react/solid'
import Modal from '../../components/Modal'
import { useCallback, useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { useRouter } from 'next/router'
import NextImage from 'next/image'
import MovieReviews from '../../components/MovieReviews'
import MovieCast from '../../components/MovieCast'
import MovieGenres from '../../components/MovieGenres'

interface IMovieProps {
  movie: Movie
  images: Image
  videos: Video[]
  error?: boolean
  message?: string
  recommendations: Movie[]
  similars: Movie[]
  cast: Cast[]
  reviews: Review[]
}

const Movie = ({
  movie,
  images,
  videos,
  error,
  message,
  recommendations,
  similars,
  cast,
  reviews,
}: IMovieProps) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [trailer, setTrailer] = useState<string>('')
  const router = useRouter()

  const getTrailer = useCallback(() => {
    const trailer = videos.find((video) => video.type === 'Trailer')
    if (trailer) {
      setTrailer(trailer.key)
    }
  }, [])

  useEffect(() => {
    getTrailer()
  }, [router.query.movie, videos])

  const onCloseModal = (): void => {
    setShowModal(false)
  }

  const openModal = (): void => {
    setShowModal(true)
  }

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 200,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 3,
    speed: 1000,
    pauseOnHover: true,
    cssEase: 'linear',
  }

  return (
    <MainLayout title={`${movie.title} on Netflix`}>
      <div>
        {/* movie */}
        <div className="relative min-h-screen w-full">
          <img
            alt={movie.original_name}
            src={getImageUrl(movie.backdrop_path)}
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
          <div className="movie-gradient absolute top-0 left-0 h-full w-full" />
          <div className="absolute top-0 left-0 flex h-full w-full flex-col items-start justify-center gap-10 py-4 px-14">
            {/* details */}
            <div className="mt-10 flex max-h-96 w-full max-w-3xl flex-col space-y-8">
              {/* info */}
              <div className="flex flex-col gap-2">
                <h1 className="mb-1 text-6xl font-bold text-white">
                  {movie.title}
                </h1>
                <MovieGenres genres={movie.genres} />
                <p className="my-4">
                  <p className="text-base font-medium text-white line-clamp-5">
                    {movie.overview}
                  </p>
                  <button className="font-light text-white">Ver Más</button>
                </p>
              </div>
              {/* buttons */}
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <button
                  className="flex items-center gap-2 rounded-md bg-netflix py-2 px-6 font-semibold text-white shadow-lg shadow-netflix/50"
                  type="button"
                  onClick={openModal}
                >
                  <VideoCameraSolid className="h-5 w-5 text-white" />
                  Ver Trailer
                </button>
                <button className="flex items-center gap-2 bg-transparent py-2 px-6 font-semibold text-white">
                  <PlusIconSolid className="h-5 w-5 text-white" />
                  Agregar a mi lista
                </button>
              </div>
            </div>
            {/* posters */}
            <div className="hidden w-full space-y-2 xl:block">
              <div className="flex w-full items-center justify-between">
                <h4 className="font-normal text-white">Imagenes</h4>
                <button className="flex items-center text-sm font-medium text-white">
                  Ver todas
                  <ChevronRightIcon className="h-5 w-5 text-white" />
                </button>
              </div>
              <div className="grid w-full grid-cols-5 gap-2">
                {images.backdrops.slice(0, 5).map((image, index) => (
                  <NextImage
                    className="h-full w-full rounded-lg shadow-lg"
                    key={index}
                    src={getImageUrl(image.file_path)}
                    width={500}
                    height={300}
                    objectFit="cover"
                    quality={90}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="py-8">
          {/* more info */}
          <div className="space-y-4 px-14 py-4">
            <h3 className="text-3xl font-bold text-white">{movie.title}</h3>
            <div className="flex flex-col gap-8">
              {/* overview */}
              <div className="">
                <p className="text-white">{movie.overview}</p>
              </div>
              {/* reparto */}
              <MovieCast cast={cast} />
              <MovieReviews reviews={reviews} />
            </div>
          </div>

          {/* recomendations */}
          <div className="space-y-2 py-8 px-14">
            <h2 className="font-normal text-white">Recomendaciones</h2>
            <Slider {...settings}>
              {recommendations.map((movie, index) => (
                <div key={index}>
                  <img
                    alt={movie.title}
                    src={getImageUrl(movie.backdrop_path)}
                    className="w-full rounded-lg shadow-lg hover:cursor-pointer"
                    onClick={() => router.push(`/m/${movie.id}`)}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* similars */}
          <div className="space-y-2 py-8 px-14">
            <h2 className="font-normal text-white">Similares</h2>
            <Slider {...settings}>
              {similars.map((movie, index) => (
                <div key={index} className>
                  <img
                    alt={movie.title}
                    src={getImageUrl(movie.backdrop_path)}
                    className="w-full rounded-lg shadow-lg hover:cursor-pointer"
                    onClick={() => router.push(`/m/${movie.id}`)}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={onCloseModal} title={movie.title}>
        <YouTube
          title={movie.title}
          videoId={trailer}
          className="h-full w-full"
          iframeClassName="w-full h-full"
        />
      </Modal>
    </MainLayout>
  )
}

export default Movie

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  try {
    const [
      movieDetails,
      movieImages,
      movieVideos,
      recommendations,
      similars,
      movieCast,
      movieReviews,
    ] = await Promise.all([
      fetch(requests.fetchMovieDetails(query.movie)).then((res) => res.json()),
      fetch(requests.fetchMovieImages(query.movie)).then((res) => res.json()),
      fetch(requests.fetchMovieVideos(query.movie)).then((res) => res.json()),
      fetch(requests.fetchMovieRecommendations(query.movie)).then((res) =>
        res.json()
      ),
      fetch(requests.fetchSimilarMovies(query.movie)).then((res) => res.json()),
      fetch(requests.fetchMovieCast(query.movie)).then((res) => res.json()),
      fetch(requests.fetchMovieReviews(query.movie)).then((res) => res.json()),
    ])

    return {
      props: {
        movie: movieDetails,
        images: movieImages,
        videos: movieVideos?.results,
        recommendations: recommendations?.results,
        similars: similars?.results,
        cast: movieCast?.cast,
        reviews: movieReviews?.results,
      },
    }
  } catch (err) {
    return {
      props: {
        error: true,
        message: 'Error en el servidor',
      },
    }
  }
}
