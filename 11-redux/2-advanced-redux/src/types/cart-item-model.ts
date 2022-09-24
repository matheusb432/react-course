export class CartItemModel {
  id: string;
  price: number;
  quantity: number;
  totalPrice: number;
  title?: string;

  private constructor(
    id: string,
    price: number,
    quantity: number,
    totalPrice: number,
    title?: string
  ) {
    this.id = id;
    this.price = price;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
    this.title = title;
  }

  static fromNewItem(cartItem: CartItemModel) {
    if (cartItem == null) return null;

    const { id, price, title } = cartItem;

    return this.fromNewProps(id, price, title);
  }

  static fromNewProps(id: string, price: number, title?: string) {
    return new CartItemModel(id, price, 1, price, title);
  }

  // * Necessary method since Redux store values should always be serializable
  toSerializable(): ICartItemModel {
    const { id, price, quantity, totalPrice, title } = this;

    return {
      id,
      price,
      quantity,
      totalPrice,
      title,
    };
  }
}

export interface ICartItemModel {
  id: string;
  price: number;
  quantity: number;
  totalPrice: number;
  name?: string;
  title?: string;
}
