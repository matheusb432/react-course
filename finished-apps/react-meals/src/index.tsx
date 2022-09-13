import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import { IndexRouter } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <IndexRouter />
  </React.StrictMode>
);
