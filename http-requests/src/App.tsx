import MoviesList from './components/MoviesList';
import './App.scss';
import axios, { AxiosResponse } from 'axios';
import { SwapiResponse, MovieModel } from './types';
import { Mapper } from 'mapper-ts/lib-esm';
import { useState } from 'react';

const apiUrl = 'https://swapi.dev/api';

function App() {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchMovies = async () => {
    setIsLoading(true);
    let res: AxiosResponse<SwapiResponse<MovieModel>>;
    try {
      res = await axios.get<SwapiResponse<MovieModel>>(`${apiUrl}/films/`);
    } finally {
      setIsLoading(false);
    }

    const movies = res.data.results;
    const mappedMovies = new Mapper(MovieModel).map(movies) as MovieModel[];

    setMovies(mappedMovies);
  };

  return (
    <>
      <section>
        <button onClick={handleFetchMovies} disabled={isLoading}>
          {isLoading ? 'Loading Movies...' : 'Fetch Movies'}
        </button>
      </section>
      <section>{!isLoading && <MoviesList movies={movies} />}</section>
    </>
  );
}

export default App;
