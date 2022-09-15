import { useState } from 'react';
import { MainHeader, Modal } from '../../components';
import { Layout } from '../../components/Layout';
import { Cart, CartButton } from '../../feature/Cart';
import { useCartContext } from '../../feature/Cart/hooks';
import { AvailableMeals } from '../../feature/Meals/AvailableMeals';
import { useMealContext } from '../../feature/Meals/hooks';
import { MealsSummary } from '../../feature/Meals/MealsSummary';
import styles from './style.module.scss';

const Home = () => {
  const {
    mealState: { meals },
  } = useMealContext();
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
