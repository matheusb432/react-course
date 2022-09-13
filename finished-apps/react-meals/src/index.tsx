import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IndexRouter } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <IndexRouter />
  </React.StrictMode>
);
