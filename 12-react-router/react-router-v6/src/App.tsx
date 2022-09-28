import { Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        {/* NOTE In React Router v6, <Switch> is replaced by <Routes> */}
        <Routes>
          {/* NOTE Instead of the rendered page being a child prop in <Route>, it will instead be the `element` prop  */}
          {/* NOTE redirection logic now takes  <Navigate /> with a `replace` attribute */}
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            {/* NOTE nested routes in v6 inside the original route definition */}
            {/* // * Is usually the best practice */}
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
          {/* NOTE The exact attribute is also now enabled by default in route definitions */}
          {/* <Route path="/products" element={<Products />} exact /> */}
          {/* NOTE which can be changed by adding /* at the end of the path */}
          {/* <Route path="/products/*" element={<Products />} /> */}
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
