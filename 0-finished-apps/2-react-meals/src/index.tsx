import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import { IndexRouter } from './router';
import { AppContextProvider } from './store/app-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <AppContextProvider>
      <IndexRouter />
    </AppContextProvider>
  </StrictMode>
);
