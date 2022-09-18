import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Button, Card, MainHeader, Modal } from '../../components';
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
    isLoadingMeals,
    errorMeals,
    requestMeals,
  } = useMealContext();
  const [showModal, setShowModal] = useState(false);
  const [renderedContent, setRenderedContent] = useState<ReactNode | null>(
    null
  );

  const renderContent = useCallback(() => {
    if (isLoadingMeals) return setRenderedContent(<p>Loading...</p>);
    if (errorMeals) return setRenderedContent(<p>{errorMeals}</p>);
    if (!meals?.length) return setRenderedContent(<p>No meals found!</p>);

    setRenderedContent(<AvailableMeals meals={meals} />);
  }, [errorMeals, isLoadingMeals, meals]);

  useEffect(() => {
    renderContent();
  }, [renderContent]);

  const {
    cartState: { items: cartItems },
  } = useCartContext();

  const openCart = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFetchMeals = () => {
    requestMeals();
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
        <MealsSummary>
          <Button onClick={handleFetchMeals} isLoading={isLoadingMeals}>
            Fetch Meals
          </Button>
        </MealsSummary>
        <div className={styles.container}>
          <Card>{renderedContent}</Card>
          {/* <AvailableMeals meals={meals} /> */}
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
