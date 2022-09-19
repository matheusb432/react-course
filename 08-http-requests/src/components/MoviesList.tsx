import React from 'react';
import { MovieModel } from '../types/movie';

import Movie from './Movie';
import classes from './MoviesList.module.scss';

interface MovieListProps {
  movies: MovieModel[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={classes['movies-list']}>
      {movies.map(({ id, title, releaseDate, openingText }) => (
        <Movie
          key={id}
          title={title}
          releaseDate={releaseDate}
          openingText={openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
