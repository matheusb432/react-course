import { useState } from 'react';
import { MainHeader, Modal } from '../../components';
import { Layout } from '../../components/Layout';
import { DUMMY_ITEMS } from '../../data/dummy-cart-items';
import { DUMMY_MEALS } from '../../data/dummy-meals';
import { Cart, CartButton, CartItemModel } from '../../feature/Cart';
import { AvailableMeals } from '../../feature/Meals/AvailableMeals';
import { MealsSummary } from '../../feature/Meals/MealsSummary';
import { Meal } from '../../feature/Meals/types';
import styles from './style.module.scss';

const Home = () => {
  const [meals, setMeals] = useState<Meal[]>(DUMMY_MEALS);
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemModel[]>(DUMMY_ITEMS);

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
          <CartButton onClick={openCart} items={3}>
            Cart
          </CartButton>
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
