import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Button, Card, MainHeader, Modal } from '../../components';
import { Layout } from '../../components/Layout';
import { Cart, CartButton } from '../../feature/Cart';
import { useCartContext } from '../../feature/Cart/hooks';
import { AvailableMeals } from '../../feature/Meals/AvailableMeals';
import { useMealContext } from '../../feature/Meals/hooks';
import { MealsSummary } from '../../feature/Meals/MealsSummary';
import { useHttp } from '../../hooks';
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
  const {
    isLoading: isLoadingOrder,
    error: orderError,
    request: orderRequest,
  } = useHttp();

  const renderContent = useCallback(() => {
    if (isLoadingMeals) return setRenderedContent(<p>Loading...</p>);
    if (errorMeals) return setRenderedContent(<p>{errorMeals}</p>);
    if (!meals?.length) return setRenderedContent(<p>No meals found!</p>);

    setRenderedContent(<AvailableMeals meals={meals} />);
  }, [errorMeals, isLoadingMeals, meals]);

  useEffect(() => {
    renderContent();
  }, [renderContent]);

  useEffect(() => {
    if (isLoadingOrder || isLoadingOrder === undefined) return;

    if (orderError) return alert(`Error ordering meal! - ${orderError}`);

    alert('Order succesfully placed!');

    setShowModal(false);
  }, [isLoadingOrder, orderError]);

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

  const handleOrderMeal = async () => {
    await orderRequest({
      method: 'PUT',
      url: '/cart.json',
      data: cartItems,
    });
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
        </div>
      </Layout>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleOrderMeal}
        isLoadingConfirm={isLoadingOrder}
        confirmText="Order">
        <Cart items={cartItems} />
      </Modal>
    </>
  );
};

export { Home };
