import { Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { useDetailParams } from '../hooks';
import { DUMMY_QUOTES } from './AllQuotes';

const QuoteDetail = () => {
  const { id } = useDetailParams();

  const quote = DUMMY_QUOTES.find((q) => q.id === id);

  if (!quote) return <p>No Quote Found!</p>;

  const { author, text } = quote;

  return (
    <>
      <HighlightedQuote author={author} text={text} />
      {/* NOTE in react-router-dom v5, nested routes are implemented like this instead of via <Outlet /> */}
      <Route path={`/quotes/${id}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export { QuoteDetail };
