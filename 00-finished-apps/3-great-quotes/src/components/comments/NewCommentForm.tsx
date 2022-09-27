import { SyntheticEvent } from 'react';
import { useInputRef } from '../../hooks';

import classes from './NewCommentForm.module.scss';

interface NewCommentFormProps {
  onAddComment: (commentData: { text: string }) => void;
}

const NewCommentForm = ({ onAddComment }: NewCommentFormProps) => {
  const commentTextRef = useInputRef<HTMLTextAreaElement>();

  const submitFormHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
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
