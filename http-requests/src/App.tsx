import axios, { AxiosError, AxiosResponse } from 'axios';
import { Mapper } from 'mapper-ts/lib-esm';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import './App.scss';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import { FirebaseResponse, MovieModel, SwapiResponse } from './types';

const swapiUrl = 'https://swapi.dev/api/films/';
const firebaseUrl = process.env['REACT_APP_FIREBASE_URL'];

function App() {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [renderedContent, setRenderedContent] = useState<ReactNode>(null);

  // NOTE necessary to have useCallback hook here to avoid infinite loop in useEffect
  const handleFetchMovies = useCallback(async () => {
    setIsLoading(true);

    // NOTE Request with error handling with Axios
    const res = await axios
      .get<FirebaseResponse<MovieModel>[]>(`${firebaseUrl}/movies.json`, {})
      .catch((err: AxiosError) => {
        setError(err.message);

        throw err;
      })
      // NOTE finally() will stop loading regardless of the request result
      .finally(() => {
        setIsLoading(false);
      });

    const resMovies: MovieModel[] = [];
    Object.entries(res.data).forEach(([key, value]) => {
      resMovies.push({ ...value, id: key } as MovieModel);
    });

    const mappedMovies = new Mapper(MovieModel).map(resMovies) as MovieModel[];

    setMovies(mappedMovies);
  }, []);

  const renderContent = useCallback(() => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong! - {error}</p>;
    if (!movies?.length) return <p>No movies found!</p>;

    return <MoviesList movies={movies} />;
  }, [error, isLoading, movies]);

  useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies]);

  useEffect(() => {
    setRenderedContent(renderContent());
  }, [renderContent]);

  const addMovieHandler = async (movie: MovieModel) => {
    setIsLoading(true);
    await handleAxiosResponse(
      axios.post<object>(`${firebaseUrl}/movies.json`, movie, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
  };

  const handleAxiosResponse = (res: Promise<AxiosResponse>) => {
    return (
      res
        .catch((err: AxiosError) => {
          setError(err.message);

          throw err;
        })
        // NOTE finally() will stop loading regardless of the request result
        .finally(() => {
          setIsLoading(false);
        })
    );
  };

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={handleFetchMovies} disabled={isLoading}>
          {isLoading ? 'Loading Movies...' : 'Fetch Movies'}
        </button>
      </section>
      <section>{renderedContent}</section>
    </>
  );
}

export default App;
