import type { NextApiRequest, NextApiResponse } from 'next';
import { theMovieDbApi } from '../../services/theMovieDb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const movies = req.query.movies as string;

  const movieList = movies.split(',');

  const results = await Promise.all(movieList.map(movieId => {
    return theMovieDbApi.get(`/movie/${movieId}/recommendations?api_key=${process.env.THE_MOVIE_DB_API_KEY}`)
      .then(res => res.data);
  }));

  return res.json(results);
}