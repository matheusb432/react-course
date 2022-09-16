import { Meal } from './../../Meals/types/meal';
export class CartItemModel {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  amount?: number;

  constructor(
    id?: string,
    name?: string,
    description?: string,
    price?: number,
    amount?: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.amount = amount ?? 1;
  }

  static fromMeal(meal: Meal) {
    const { id, name, description, price } = meal;

    return new CartItemModel(id, name, description, price);
  }

  static fromMealWithAmount(meal: Meal, amount: number) {
    const cartItem = this.fromMeal(meal);

    cartItem.amount = amount;

    return cartItem;
  }
}
