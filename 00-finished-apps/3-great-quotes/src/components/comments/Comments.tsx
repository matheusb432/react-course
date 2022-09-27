import { useState } from 'react';
import { CommentModel } from '../../types';

import classes from './Comments.module.scss';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const handleAddComment = (comment: CommentModel) => {};

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddComment={handleAddComment} />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
