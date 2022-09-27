import { CommentModel } from '../../types';
import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

interface CommentsListProps {
  comments: CommentModel[];
}

const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <ul className={classes.comments}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
