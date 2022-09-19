import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/Button';

import classes from './Navigation.module.css';

const Navigation = () => {
  // NOTE useContext hook to get the AuthContext singleton instance
  const authCtx = useContext(AuthContext);

  return (
    // NOTE adding auth context with consumer wrapper approach (not common)
    // <AuthContext.Consumer>
    //   {(ctx) => (
    <nav className={classes.nav}>
      <ul>
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <Button onClick={authCtx.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};
// </AuthContext.Consumer>

export default Navigation;
