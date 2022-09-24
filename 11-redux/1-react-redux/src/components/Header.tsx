import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { authActions } from '../store';
import { AppState } from '../store/reducer';
import { useAuthDispatch } from '../store/types';
import classes from './Header.module.scss';

const Header = () => {
  const { isLoggedIn, user } = useSelector((state: AppState) => state.auth);

  const [renderedContent, setRenderedContent] = useState<ReactNode>(null);

  const dispatch = useAuthDispatch();

  console.log(isLoggedIn, user);

  const handleLogout = useCallback(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  const renderContent = useCallback(() => {
    return isLoggedIn ? (
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    ) : (
      <ul>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    );
  }, [isLoggedIn, handleLogout]);

  useEffect(() => {
    setRenderedContent(renderContent());
  }, [renderContent]);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {renderedContent}
        {/* <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
