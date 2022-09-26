import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useFetch } from './hooks';
import { useAppDispatch, useAppSelector } from './store';
import { fetchCartData, sendCartData } from './store/cart-slice';
import { uiActions } from './store/ui-slice';
import { safeDestructure } from './util';

function App() {
  const dispatch = useAppDispatch();
  const { cartIsVisible, notification, isInitial } = useAppSelector(
    (state) => state.ui
  );
  // NOTE useSelector sets up a subscription to Redux, so whenever the state changes, the component will re-render.
  const cart = useAppSelector((state) => state.cart);
  const { sendRequest } = useFetch();

  const { status, title, message } = safeDestructure(notification)!;

  useEffect(() => {
    if (isInitial) {
      dispatch(uiActions.initialize());

      return;
    }

    if (!cart.changed) return;

    // NOTE By using the action creator, reusable logic can be abstracted away from the component.
    dispatch(sendCartData(cart, sendRequest));

    /* NOTE Side effect handling via updating the backend data whenever the cart state changes with useEffect
    dispatch(
      uiActions.showNotification({
        status: NotificationTypes.Pending,
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );
    sendRequest({
      url: 'cart.json',
      options: {
        method: 'PUT',
        body: JSON.stringify(cart),
      },
      handleData() {
        dispatch(
          uiActions.showNotification({
            status: NotificationTypes.Success,
            title: 'Success!',
            message: 'Sent cart data successfully!',
          })
        );
      },
    });
    */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, dispatch, sendRequest]);

  useEffect(() => {
    dispatch(fetchCartData(sendRequest));
  }, [dispatch, sendRequest]);

  return (
    <>
      {notification && (
        <Notification status={status} title={title} message={message} />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
