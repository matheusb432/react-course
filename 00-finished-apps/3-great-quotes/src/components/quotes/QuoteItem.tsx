import classes from './QuoteItem.module.css';

interface QuoteItemProps {
  id?: string;
  text: string;
  author: string;
}

const QuoteItem = ({ text, author }: QuoteItemProps) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <a className="btn">View Fullscreen</a>
    </li>
  );
};

QuoteItem.defaultProps = {
  id: '',
};

export default QuoteItem;
