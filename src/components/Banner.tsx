import { useEffect, useState } from 'react'
import { Movie } from '../types'
import Image from 'next/image'
import { baseUrl } from '../constants/movie'
import { PlayIcon, InformationCircleIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

interface IBannerProps {
  movies: Movie[]
}

export default function Banner({ movies }: IBannerProps) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const router = useRouter()

  // Select random movie
  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)])
  }, [movies])

  return (
    <div className="flex h-full flex-col sm:h-screen">
      {/* image */}
      <div className="absolute top-0 left-0 z-0 h-screen w-full">
        <Image
          src={`${baseUrl}/${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-10 h-screen w-full bg-gradientToB" />
      {/* details */}
      <div className="z-10 flex h-3/4 w-full items-start justify-center px-10 pt-32 sm:h-full sm:items-center sm:pt-0">
        <div className="flex w-full max-w-7xl flex-col justify-start gap-4">
          <h1 className="text-3xl font-bold text-white sm:text-7xl">
            {movie?.title || movie?.original_name || movie?.name}
          </h1>
          <p className="text-lg font-normal text-white">{movie?.overview}</p>
          {/* bottons */}
          <div className="flex items-center gap-2">
            <button className="flex scale-100 items-center gap-2 rounded-sm bg-netflix px-4 py-2  text-white shadow-lg shadow-netflix/50 transition-all duration-200 hover:scale-105 hover:shadow-md">
              <PlayIcon className="h-6 w-6" />
              Play
            </button>
            <button
              className="flex scale-100 items-center gap-2 rounded-sm bg-white px-4 py-2 text-black shadow-none transition-all duration-200 hover:scale-105 hover:shadow-md"
              onClick={() => router.push(`/m/${movie?.id}`)}
            >
              <InformationCircleIcon className="h-6 w-6" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
