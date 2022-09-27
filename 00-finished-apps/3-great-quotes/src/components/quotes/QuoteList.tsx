import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { Quote } from '../../types';
import { sortList } from '../../util';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.scss';

interface QuoteListProps {
  quotes: Quote[];
}

const QuoteList = ({ quotes }: QuoteListProps) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortList(quotes, 'id', isAscending);

  const handleChangeSort = () => {
    history.push({
      // NOTE location.pathname is the current path
      pathname: location.pathname,
      search: `?sort=${isAscending ? 'desc' : 'asc'}`,
    });
  };

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={handleChangeSort}>
          Sort {isAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
