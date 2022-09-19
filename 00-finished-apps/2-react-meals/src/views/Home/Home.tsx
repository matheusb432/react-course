import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Button, Card, MainHeader, Modal } from '../../components';
import { Layout } from '../../components/Layout';
import { Cart, CartButton } from '../../feature/Cart';
import {
  CartForm,
  CartFormForwardRef,
  Order,
} from '../../feature/Cart/CartForm';
import { useCartContext } from '../../feature/Cart/hooks';
import { AvailableMeals } from '../../feature/Meals/AvailableMeals';
import { useMealContext } from '../../feature/Meals/hooks';
import { MealsSummary } from '../../feature/Meals/MealsSummary';
import { useElementRef, useHttp } from '../../hooks';
import styles from './style.module.scss';

const Home = () => {
  const {
    mealState: { meals },
    isLoadingMeals,
    errorMeals,
    fetchMeals: requestMeals,
  } = useMealContext();
  const [showModal, setShowModal] = useState(false);
  const [renderedContent, setRenderedContent] = useState<ReactNode | null>(
    null
  );
  const {
    isLoading: isLoadingOrder,
    error: orderError,
    put: orderUpdate,
  } = useHttp();
  const {
    isLoading: isLoadingCreateOrder,
    error: createOrderError,
    post: createOrder,
  } = useHttp();

  const formRef = useElementRef<CartFormForwardRef>();

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
    const { name, address, isValid, touchInputs, resetInputs } =
      formRef.current!;

    touchInputs();

    if (!isValid) return;

    resetInputs();

    await orderUpdate({
      url: '/cart.json',
      data: cartItems,
    });

    const order = { name, address };

    handleSubmit(order);
  };

  const handleSubmit = async (order: Order) => {
    order.id = Math.random().toString();
    order.cartItems = cartItems;

    await createOrder({
      url: 'orders.json',
      data: order,
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
        <CartForm onSubmit={handleSubmit} ref={formRef} />
      </Modal>
    </>
  );
};

export { Home };
