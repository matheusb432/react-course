import { Fragment } from 'react';
import { Quote } from '../../types';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

interface QuoteListProps {
  quotes: Quote[];
}

const QuoteList = ({ quotes }: QuoteListProps) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
