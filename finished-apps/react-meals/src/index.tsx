import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import { IndexRouter } from './router';
import { CartContextProvider } from './feature/Cart/store/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <IndexRouter />
    </CartContextProvider>
  </React.StrictMode>
);
