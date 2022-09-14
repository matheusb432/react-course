import { MainHeader } from '../../components';
import { Layout } from '../../components/Layout';
import { DUMMY_MEALS } from '../../data/dummy-meals';
import { CartButton } from '../../feature/Cart';
import { AvailableMeals } from '../../feature/Meals/AvailableMeals';
import { MealsSummary } from '../../feature/Meals/MealsSummary';
import styles from './style.module.scss';

const Home = () => {
  const meals = DUMMY_MEALS;

  const openCart = () => {};

  return (
    <Layout>
      <MainHeader text="ReactMeals">
        <CartButton onClick={openCart} items={3}>
          Cart
        </CartButton>
      </MainHeader>
      <MealsSummary />
      <div className={styles.container}>
        <AvailableMeals meals={meals} />
      </div>
    </Layout>
  );
};

export { Home };
