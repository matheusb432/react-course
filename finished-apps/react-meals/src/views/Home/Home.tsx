import { useState } from 'react';
import { MainHeader, Modal } from '../../components';
import { Layout } from '../../components/Layout';
import { DUMMY_MEALS } from '../../data/dummy-meals';
import { Cart, CartButton } from '../../feature/Cart';
import { useCartContext } from '../../feature/Cart/hooks';
import { AvailableMeals } from '../../feature/Meals/AvailableMeals';
import { MealsSummary } from '../../feature/Meals/MealsSummary';
import { Meal } from '../../feature/Meals/types';
import styles from './style.module.scss';

const Home = () => {
  const [meals, setMeals] = useState<Meal[]>(DUMMY_MEALS);
  const [showModal, setShowModal] = useState(false);

  const {
    cartState: { items: cartItems },
  } = useCartContext();

  const openCart = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOrderMeal = () => {
    console.log('Ordering meal...');
  };

  return (
    <>
      <Layout>
        <MainHeader text="ReactMeals">
          <CartButton onClick={openCart}>Cart</CartButton>
        </MainHeader>
        <MealsSummary />
        <div className={styles.container}>
          <AvailableMeals meals={meals} />
        </div>
      </Layout>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleOrderMeal}
        confirmText="Order">
        <Cart items={cartItems} />
      </Modal>
    </>
  );
};

export { Home };
