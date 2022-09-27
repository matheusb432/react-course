import styles from './Layout.module.scss';
import { MainNavigation } from './MainNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export { Layout };
