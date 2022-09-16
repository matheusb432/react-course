import React, { FormEvent, useRef } from 'react';
import { useInputRef } from '../hooks';
import { MovieModel } from '../types';

import classes from './AddMovie.module.scss';

interface AddMovieProps {
  onAddMovie: (movie: MovieModel) => void;
}

function AddMovie({ onAddMovie }: AddMovieProps) {
  const titleRef = useInputRef();
  const openingTextRef = useInputRef<HTMLTextAreaElement>();
  const releaseDateRef = useInputRef();

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    const movie = {
      id: Math.random().toString(),
      title: titleRef.current!.value,
      openingText: openingTextRef.current!.value,
      releaseDate: releaseDateRef.current!.value,
    };

    onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
