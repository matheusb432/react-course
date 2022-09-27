import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { MainHeader } from '../components/MainHeader';
import { ProductDetail } from '../views/ProductDetail';
import { Products } from '../views/Products';
import { Welcome } from '../views/Welcome';

const IndexRouter = () => {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <main>
          {/* NOTE Switch makes it so only one of theses routes can be active at once */}
          <Switch>
            <Route path="/">
              {/* NOTE adding the Redirect component to another route */}
              <Redirect to="/welcome" />
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            {/* NOTE The exact attribute will only lead to this route if the URL is an exact match */}
            <Route path="/products" exact>
              <Products />
            </Route>
            {/* <Route path="/product-detail/:id"> */}
            <Route path="/products/:id">
              <ProductDetail />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export { IndexRouter };
