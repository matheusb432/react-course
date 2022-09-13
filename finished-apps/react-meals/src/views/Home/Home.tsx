import { MainHeader } from '../../components';
import { Layout } from '../../components/Layout';
import { MealsSummary } from '../../feature/Meals/MealsSummary';
import styles from './style.module.scss';

const Home = () => {
  return (
    <Layout>
      <MainHeader text="ReactMeals" />
      <MealsSummary />
    </Layout>
  );
};

export { Home };
