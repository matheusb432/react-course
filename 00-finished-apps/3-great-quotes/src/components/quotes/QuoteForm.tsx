import { SyntheticEvent } from 'react';
import { useInputRef } from '../../hooks';
import { Quote } from '../../types';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

interface QuoteFormProps {
  isLoading: boolean;
  onAddQuote: (quoteData: Quote) => void;
}

const QuoteForm = (props: QuoteFormProps) => {
  const authorInputRef = useInputRef();
  const textInputRef = useInputRef<HTMLTextAreaElement>();

  function submitFormHandler(event: SyntheticEvent) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current!.value;
    const enteredText = textInputRef.current!.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows={5} ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
