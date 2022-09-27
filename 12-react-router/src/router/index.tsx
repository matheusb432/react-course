import { BrowserRouter, Route } from 'react-router-dom';
import { MainHeader } from '../components/MainHeader';
import { Products } from '../views/Products';
import { Welcome } from '../views/Welcome';

const IndexRouter = () => {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <main>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </main>
      </BrowserRouter>
    </>
  );
};

export { IndexRouter };
