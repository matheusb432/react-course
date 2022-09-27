import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib';
import { Quote } from '../types';

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status !== 'completed') return;

    // NOTE Programmatically navigating to a different page
    history.push('/quotes');
  }, [history, status]);

  const handleAddQuote = (quote: Quote) => {
    sendRequest(quote);
  };

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={handleAddQuote} />
  );
};

export { NewQuote };
