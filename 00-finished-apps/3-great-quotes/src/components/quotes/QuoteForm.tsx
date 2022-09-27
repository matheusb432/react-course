import { SyntheticEvent, useState } from 'react';
import { Prompt } from 'react-router-dom';
import { useInputRef } from '../../hooks';
import { Quote } from '../../types';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.scss';

interface QuoteFormProps {
  isLoading?: boolean;
  onAddQuote: (quoteData: Quote) => void;
}

const QuoteForm = (props: QuoteFormProps) => {
  const [touchedForm, setTouchedForm] = useState(false);

  const authorInputRef = useInputRef();
  const textInputRef = useInputRef<HTMLTextAreaElement>();

  async function submitFormHandler(event: SyntheticEvent) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current!.value;
    const enteredText = textInputRef.current!.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const handleFormFocus = () => {
    setTouchedForm(true);
  };

  const untouchForm = () => {
    setTouchedForm(false);
  };

  return (
    <>
      {/* NOTE Prompt can intercept the user navigating away from the route with the default browser confirm prompt */}
      <Prompt
        when={touchedForm}
        message={(location) =>
          'Are you sure you want to leave? all your entered data will be lost'
        }
      />
      <Card>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
          onFocus={handleFormFocus}>
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
            <button onClick={untouchForm} type="submit" className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

QuoteForm.defaultProps = {
  isLoading: false,
};

export default QuoteForm;
