import { NextApiRequest, NextApiResponse } from 'next';
import { theMovieDbApi } from '../../services/theMovieDb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({
      error: 'You must provide a name'
    });
  }

  const { data } = await theMovieDbApi.get(
    `/search/movie?api_key=${process.env.THE_MOVIE_DB_API_KEY}&query=${name}`
  );

  return res.json(data);
}