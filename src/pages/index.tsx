import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { Movie } from '../types/movie';

export default function Home() {
  const [movieSearchInput, setMovieSearchInput] = useState('');
  const [movieSearchList, setMovieSearchList] = useState<Movie[]>([]);

  useEffect(() => {
    if (!movieSearchInput) {
      return;
    }

    axios.get<{ results: Movie[] }>(`/api/getMovieByName?name=${movieSearchInput}`)
      .then(({ data }) => setMovieSearchList(data.results))
  }, [movieSearchInput]);

  return (
    <div>
      <input
        onChange={({ target }) => setMovieSearchInput(target.value)}
        value={movieSearchInput}
      />

      <div
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {movieSearchList.map(movie => (
          <button key={movie.id} onClick={() => console.log(movie)}>
            {movie.original_title}
          </button>
        ))}
      </div>
    </div>
  );
}