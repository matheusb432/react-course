import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useFetch } from './hooks';
import { useAppSelector } from './store';
import { FirebaseResponse } from './types';

function App() {
  const { cartIsVisible } = useAppSelector((state) => state.ui);
  const { sendRequest } = useFetch();
  useEffect(() => {
    async function man() {
      await sendRequest({
        url: 'meals.json',
        options: { method: 'GET' },
        // TODO add type
        handleData(data: FirebaseResponse<any>) {
          console.log(data);
        },
      });
    }

    man();
  }, [sendRequest]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
