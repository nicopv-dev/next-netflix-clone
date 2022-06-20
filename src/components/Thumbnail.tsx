import Image from 'next/image'
import { useRouter } from 'next/router'
import { Movie } from '../types'

interface IThunbnailProps {
  movie: Movie
}

export default function Thumbnail({ movie }: IThunbnailProps) {
  const router = useRouter()

  const goToMovie = (movie: Movie) => {
    router.push(`/m/${movie.id}`)
  }

  return (
    <div
      className="relative h-28 min-w-[200px] overflow-hidden md:h-36 md:min-w-[268px]"
      onClick={() => goToMovie(movie)}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie?.poster_path || movie?.backdrop_path
        }`}
        layout="fill"
        className="cursor-pointer rounded-sm object-cover transition duration-200 ease-out md:rounded md:hover:scale-105"
      />
    </div>
  )
}
