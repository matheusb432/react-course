import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* NOTE in v6, activeClassName prop is removed and now the className receives a function to set the active class name */}
            {/* <NavLink activeClassName={classes.active} to='/welcome'> */}
            <NavLink
              className={(isActive) => (isActive ? classes.active : '')}
              to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(isActive) => (isActive ? classes.active : '')}
              to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
