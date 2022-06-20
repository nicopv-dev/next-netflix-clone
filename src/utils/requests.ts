const API_KEY = process.env.NEXT_PUBLIC_TMBD_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
  fetchAllTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingMovies: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingSeries: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US`,
}

export default requests
