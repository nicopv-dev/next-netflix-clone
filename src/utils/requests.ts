const API_KEY = process.env.NEXT_PUBLIC_TMBD_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
  fetchAllTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingMovies: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingSeries: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedSeries: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchMovieDetails: (id: string) =>
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
  fetchMovieImages: (id: string) =>
    `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`,
  fetchMovieVideos: (id: string) =>
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`,
  fetchPopularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchMovieRecommendations: (id: string) =>
    `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`,
  fetchSimilarMovies: (id: string) =>
    `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US`,
  fetchMovieCast: (id: string) =>
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
  fetchMovieReviews: (id: string) =>
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`,
}

export default requests

export const getImageUrl = (path: string) => {
  return `https://image.tmdb.org/t/p/original${path}`
}
