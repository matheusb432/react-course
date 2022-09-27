import styles from './MainHeader.module.scss';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            {/* NOTE navigating directly via href is bad practice. */}
            {/* // * it reloads the page, losing the page state and providing a worse UX */}
            {/* <a href="/welcome">Welcome</a> */}
            <NavLink activeClassName={styles.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { MainHeader };
