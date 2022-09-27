import { useEffect } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { useDetailParams } from '../hooks';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib';
import { Quote } from '../types';
import { DUMMY_QUOTES } from './AllQuotes';

const QuoteDetail = () => {
  const { id } = useDetailParams();
  const match = useRouteMatch();

  // const quote = DUMMY_QUOTES.find((q) => q.id === id);

  const currentPath = match.path;
  const commentsPath = `${currentPath}/comments`;

  const { sendRequest, status, data, error } = useHttp(getSingleQuote, true);

  const loadedQuote = data as Quote;

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote?.text) {
    return <p>No quote found!</p>;
  }

  if (!loadedQuote) return <p>No Quote Found!</p>;

  const { author, text } = loadedQuote;

  return (
    <>
      <HighlightedQuote author={author} text={text} />
      {/* NOTE this will only load if the comments aren't loaded */}
      <Route path={currentPath} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      {/* NOTE in react-router-dom v5, nested routes are implemented like this instead of via <Outlet /> */}
      <Route path={commentsPath}>
        <Comments />
      </Route>
    </>
  );
};

export { QuoteDetail };
