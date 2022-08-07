export interface Movie {
  title: string
  backdrop_path: string
  media_type?: string
  release_date?: string
  first_air_date: string
  genres: Genre[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
  video?: boolean
}

export interface Serie {
  id: number
  name: string
  original_name: string
  first_air_date: string
  overview: string
  backdrop_path: string
  poster_path: string
}

export interface Backdrop {
  aspect_radio: number
  file_path: string
  height: number
  iso_639_1: string
  vote_average: number
  vote_count: number
  width: number
}

export interface Poster {
  aspect_radio: number
  file_path: string
  height: number
  iso_639_1: string
  vote_average: number
  vote_count: number
  width: number
}

export interface Image {
  backdrops: Backdrop[]
  posters: Poster[]
}

export interface Genre {
  id: number
  name: string
}

export interface Video {
  id: string
  name: string
  site: string
  size: number
  key: string
  type: string
}

export interface Cast {
  id: string
  adult: boolean
  gender: number
  know_for_departament: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface Person {}

export interface Author {
  name: string
  username: string
  avatar_path: string
  raiting: number
}

export interface Review {
  id: string
  author: string
  author_details: Author
  content: string
  created_at: string
  url: string
}
