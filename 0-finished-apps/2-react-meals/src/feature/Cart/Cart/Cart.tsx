import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useHttp } from '../../../hooks';
import { CartForm, Order } from '../CartForm';
import { CartItemModel } from '../CartItem';
import CartItem from '../CartItem/CartItem';
import { useCartContext } from '../hooks';
import { CartActions } from '../store';
import styles from './style.module.scss';

interface CartProps {
  items: CartItemModel[];
}

const Cart = ({ items }: CartProps) => {
  const {
    cartState: { totalPrice },
    cartDispatch,
  } = useCartContext();

  const [renderedItems, setRenderedItems] = useState<ReactNode | null>(null);

  const handleAddItem = useCallback(
    (cart: CartItemModel) => {
      const cartToAdd = structuredClone(cart);
      cartToAdd.amount = 1;
      cartDispatch({
        type: CartActions.AddToCart,
        payload: cartToAdd,
      });
    },
    [cartDispatch]
  );

  const handleRemoveItem = useCallback(
    (cart: CartItemModel) => {
      const cartToRemove = structuredClone(cart);

      cartDispatch({
        type: CartActions.DecrementCartItem,
        payload: cartToRemove,
      });
    },
    [cartDispatch]
  );

  const renderItems = useCallback(() => {
    items.sort((a, b) => (a.id! > b.id! ? -1 : 1));

    return items.map((item) => (
      <CartItem
        key={item?.id ?? Math.random().toString()}
        item={item}
        onAdd={handleAddItem}
        onRemove={handleRemoveItem}
      />
    ));
  }, [handleAddItem, handleRemoveItem, items]);

  useEffect(() => {
    setRenderedItems(renderItems());
  }, [renderItems]);

  return (
    <>
      <ul className={styles['cart-items']}>{renderedItems}</ul>
      <div className={styles['total-amount']}>
        <span>Total Amount</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </>
  );
};

export { Cart };
