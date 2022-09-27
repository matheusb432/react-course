import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { AllQuotes } from '../pages/AllQuotes';
import { NewQuote } from '../pages/NewQuote';
import { NotFound } from '../pages/NotFound';
import { QuoteDetail } from '../pages/QuoteDetail';

const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:id">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          {/* NOTE the * path makes it so any path will match to this one, so this must come last */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export { IndexRouter };
