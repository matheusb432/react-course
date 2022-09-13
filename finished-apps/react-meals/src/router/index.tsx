import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../views';

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
