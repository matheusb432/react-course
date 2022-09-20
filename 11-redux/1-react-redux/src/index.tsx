import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* NOTE adding Redux provider wrapper to root level component */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
