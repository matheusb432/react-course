import QuoteList from '../components/quotes/QuoteList';
import { Quote } from '../types';
import { getAllQuotes } from '../lib';
import useHttp from '../hooks/use-http';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';

export const DUMMY_QUOTES: Quote[] = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (!loadedQuotes || loadedQuotes.length === 0) {
    return <p className="centered">No quotes found!</p>;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export { AllQuotes };
