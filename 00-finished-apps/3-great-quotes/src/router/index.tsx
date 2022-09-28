import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { AllQuotes } from '../pages/AllQuotes';

// NOTE Configuring lazy loading via React.lazy(), will only load the component when it is needed
const NewQuote = React.lazy(() =>
  import('../pages/NewQuote').then((module) => ({ default: module.NewQuote }))
);
const QuoteDetail = React.lazy(() =>
  import('../pages/QuoteDetail').then((module) => ({
    default: module.QuoteDetail,
  }))
);
// NOTE This is the syntax for default exports
const NotFound = React.lazy(() => import('../pages/NotFound'));

const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        {/* NOTE <Suspense> will serve as the fallback in case a lazy module needs to be loaded */}
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }>
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
              {/* NOTE This <Suspense> will overwrite the global suspense fallback in the case of NewQuote loading */}
              <Suspense
                fallback={<div className="centered">Loading NewQuote...</div>}>
                <NewQuote />
              </Suspense>
            </Route>
            {/* NOTE the * path makes it so any path will match to this one, so this must come last */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export { IndexRouter };
