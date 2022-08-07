import { Genre } from '../types'

interface IMovieGenresProps {
  genres: Genre[]
}

export default function MovieGenres({ genres }: IMovieGenresProps) {
  return (
    <div className="flex items-center gap-6 text-xs font-semibold uppercase text-white">
      {genres.sort().map((genre, index) => (
        <span key={index}>{genre.name}</span>
      ))}
    </div>
  )
}
