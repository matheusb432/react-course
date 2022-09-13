import styles from './style.module.scss';

interface MainHeaderProps {
  text: string;
}

const MainHeader = ({ text }: MainHeaderProps) => {
  return (
    <>
      <header className={styles.header}>{text}</header>
      <div className={styles['main-image']}>
        <img src="images/meals.jpg" alt="Meals on a banquet table" />
      </div>
    </>
  );
};

export { MainHeader };
