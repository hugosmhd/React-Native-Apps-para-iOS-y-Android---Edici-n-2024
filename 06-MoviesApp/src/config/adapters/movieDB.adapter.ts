import { THE_MOVIE_DB_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: 'fe0490fcef04129247f19d5146336cda',
    api_key: THE_MOVIE_DB_KEY,
    language: 'es'
  }
});