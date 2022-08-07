import Image from 'next/image'
import { useRouter } from 'next/router'
import { Movie } from '../types'

interface IThunbnailProps {
  movie: Movie
}

export default function Thumbnail({ movie }: IThunbnailProps) {
  const router = useRouter()

  const goToMovie = () => {
    if (movie.media_type === 'movie') {
      router.push(`/m/${movie.id}`)
    } else {
      router.push(`/s/${movie.id}`)
    }
  }

  return (
    <div
      className="relative h-28 min-w-[200px] overflow-hidden md:h-36 md:min-w-[268px]"
      onClick={goToMovie}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie?.backdrop_path || movie?.poster_path
        }`}
        layout="fill"
        className="cursor-pointer rounded-sm object-cover transition duration-200 ease-out md:rounded md:hover:scale-105"
      />
    </div>
  )
}
