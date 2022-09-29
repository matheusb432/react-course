import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import useAuthContext from './hooks/use-auth-context';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const { isLoggedIn } = useAuthContext();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {!isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
        <Route
          path="/profile"
          element={
            isLoggedIn ? <UserProfile /> : <Navigate to="/auth" replace />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
