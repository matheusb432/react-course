import classes from './HighlightedQuote.module.scss';

interface HighlightedQuoteProps {
  id?: string;
  text: string;
  author: string;
}

// TODO refactor to QuoteItem?
const HighlightedQuote = ({ text, author }: HighlightedQuoteProps) => {
  return (
    <figure className={classes.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
