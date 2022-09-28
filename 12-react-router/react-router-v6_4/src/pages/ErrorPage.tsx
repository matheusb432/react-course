import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  const error = useRouteError() as any;

  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1>An error ocurred!</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
};

export { ErrorPage };
