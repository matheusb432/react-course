import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { addComment, getAllComments } from '../../lib';
import { CommentModel } from '../../types';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Comments.module.scss';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams<{ id: string }>();
  const { id: quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedComments,
  } = useHttp(getAllComments, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const handleAddComment = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let renderedContent: ReactNode;

  if (status === 'pending') {
    renderedContent = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed') {
    renderedContent = <CommentsList comments={loadedComments} />;
  }

  if (status === 'completed' && !loadedComments?.length) {
    renderedContent = <p className="centered">No comments were added yet!</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={params.id} onAddComment={handleAddComment} />
      )}
      {renderedContent}
    </section>
  );
};

export default Comments;
