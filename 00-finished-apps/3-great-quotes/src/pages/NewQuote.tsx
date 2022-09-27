import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import { Quote } from '../types';

const NewQuote = () => {
  const history = useHistory();

  const handleAddQuote = (quote: Quote) => {
    console.log(quote);

    // NOTE Programmatically navigating to a different page
    history.push('/quotes');
  };

  return <QuoteForm onAddQuote={handleAddQuote} />;
};

export { NewQuote };
