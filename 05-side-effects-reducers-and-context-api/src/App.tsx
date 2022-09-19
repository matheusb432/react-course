import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import useAuthContext from './hooks/use-auth-context';

function App() {
  const { isLoggedIn } = useAuthContext();

  return (
    <>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </>
  );
  {
  }
}

export default App;
