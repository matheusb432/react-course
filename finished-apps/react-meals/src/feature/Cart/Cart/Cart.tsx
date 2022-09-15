import { CartItemModel } from '../CartItem';
import CartItem from '../CartItem/CartItem';
import { useCartContext } from '../hooks';
import { CartActions } from '../store';
import styles from './style.module.scss';

interface CartProps {
  items: CartItemModel[];
}

const Cart = ({ items }: CartProps) => {
  const { cartDispatch } = useCartContext();

  const handleAddItem = (cart: CartItemModel) => {
    const cartToAdd = structuredClone(cart);
    cartToAdd.amount = 1;
    cartDispatch({
      type: CartActions.AddToCart,
      payload: cartToAdd,
    });
  };

  const handleRemoveItem = (cart: CartItemModel) => {
    const cartToRemove = structuredClone(cart);

    cartDispatch({
      type: CartActions.DecrementCartItem,
      payload: cartToRemove,
    });
  };

  const renderItems = () => {
    items.sort((a, b) => (a.id! > b.id! ? -1 : 1));

    return items.map((item) => (
      <CartItem
        key={item?.id ?? Math.random().toString()}
        item={item}
        onAdd={handleAddItem}
        onRemove={handleRemoveItem}
      />
    ));
  };
  return (
    <>
      <ul className={styles['cart-items']}>{renderItems()}</ul>
      <div className={styles['total-amount']}></div>
    </>
  );
};

export { Cart };
