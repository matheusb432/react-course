import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.scss';

interface QuoteItemProps {
  id?: string;
  text: string;
  author: string;
}

const QuoteItem = ({ id, text, author }: QuoteItemProps) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link to={`/quotes/${id}`} className="btn">
        View Fullscreen
      </Link>
    </li>
  );
};

QuoteItem.defaultProps = {
  id: '',
};

export default QuoteItem;
