import axios from 'axios';

export const theMovieDbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${process.env.THE_MOVIE_DB_TOKEN}`
  }
});