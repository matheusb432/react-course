import { SyntheticEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useInputRef } from '../../hooks';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './NewCommentForm.module.scss';

interface NewCommentFormProps {
  onAddComment: () => void;
  // NOTE adding quoteId through props makes this component reusable
  quoteId: string;
}

const NewCommentForm = ({ onAddComment, quoteId }: NewCommentFormProps) => {
  const commentTextRef = useInputRef<HTMLTextAreaElement>();
  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status !== 'completed' || !!error) return;

    onAddComment();
  }, [error, onAddComment, status]);

  const submitFormHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    // const enteredText = commentTextRef.current!.value;
    const enteredText = commentTextRef.current!.value;
    // optional: Could validate here

    sendRequest({ commentData: { text: enteredText }, quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
