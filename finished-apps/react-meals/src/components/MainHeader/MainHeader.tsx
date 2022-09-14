import { ReactNode } from 'react';
import { CartButton } from '../../feature/Cart';
import styles from './style.module.scss';

interface MainHeaderProps {
  children: ReactNode;
  text: string;
}

const MainHeader = ({ children, text }: MainHeaderProps) => {
  return (
    <>
      <header className={styles.header}>
        {text}
        {children}
      </header>
      <div className={styles['main-image']}>
        <img src="images/meals.jpg" alt="Meals on a banquet table" />
      </div>
    </>
  );
};

export { MainHeader };
