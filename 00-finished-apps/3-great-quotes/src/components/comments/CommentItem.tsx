import classes from './CommentItem.module.scss';

interface CommentItemProps {
  text: string;
}

const CommentItem = ({ text }: CommentItemProps) => {
  return (
    <li className={classes.item}>
      <p>{text}</p>
    </li>
  );
};

export default CommentItem;
