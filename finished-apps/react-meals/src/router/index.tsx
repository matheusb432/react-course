import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../views';
import styles from './style.module.scss';

const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export { IndexRouter };
