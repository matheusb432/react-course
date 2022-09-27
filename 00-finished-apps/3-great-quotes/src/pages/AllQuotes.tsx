import QuoteList from '../components/quotes/QuoteList';
import { Quote } from '../types';

export const DUMMY_QUOTES: Quote[] = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export { AllQuotes };
