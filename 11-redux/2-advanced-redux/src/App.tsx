import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useFetch } from './hooks';
import { useAppDispatch, useAppSelector } from './store';
import { uiActions } from './store/ui-slice';
import { NotificationTypes } from './types';
import { safeDestructure } from './util';

function App() {
  const dispatch = useAppDispatch();
  const { cartIsVisible, notification, isInitial } = useAppSelector(
    (state) => state.ui
  );
  // NOTE useSelector sets up a subscription to Redux, so whenever the state changes, the component will re-render.
  const cart = useAppSelector((state) => state.cart);
  const { error, sendRequest } = useFetch();

  const { status, title, message } = safeDestructure(notification)!;

  // NOTE Side effect handling strategy via updating the backend data whenever the cart state changes with useEffect
  useEffect(() => {
    if (isInitial) {
      dispatch(uiActions.initialize());

      return;
    }

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
  }, [cart, dispatch, sendRequest]);

  useEffect(() => {
    if (error == null) return;

    dispatch(
      uiActions.showNotification({
        status: NotificationTypes.Error,
        title: 'Error!',
        message: error,
      })
    );
  }, [dispatch, error]);

  // useEffect(() => {
  //   async function man() {
  //     await sendRequest({
  //       url: 'meals.json',
  //       options: { method: 'GET' },
  //       // TODO add type
  //       handleData(data: FirebaseResponse<any>) {
  //         console.log(data);
  //       },
  //     });
  //   }

  //   man();
  // }, [sendRequest]);

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
