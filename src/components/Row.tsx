import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import Thumbnail from './Thumbnail'

interface IRowProps {
  movies: Movie[]
  title: string
}

export default function Row({ movies, title }: IRowProps) {
  const [isMoved, setIsMoved] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)

  const handleClickChevron = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="z-0 flex flex-col gap-2">
      <h2 className="text-xl font-medium text-white">{title}</h2>

      <div className="relative">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer text-white 
          `}
          onClick={() => handleClickChevron('left')}
        />
        <div
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5"
          ref={rowRef}
        >
          {movies.map((item, index) => (
            <Thumbnail key={index} movie={item} />
          ))}
        </div>
        <ChevronRightIcon
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer text-white"
          onClick={() => handleClickChevron('right')}
        />
      </div>
    </div>
  )
}
