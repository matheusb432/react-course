import { Meal } from './../../Meals/types/meal';
export class CartItemModel {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  amount?: number;

  constructor(
    name?: string,
    description?: string,
    price?: number,
    amount?: number
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.amount = amount ?? 1;
  }

  static fromMeal(meal: Meal) {
    const { name, description, price } = meal;

    return new CartItemModel(name, description, price);
  }

  static fromMealWithAmount(meal: Meal, amount: number) {
    const { name, description, price } = meal;

    return new CartItemModel(name, description, price, amount);
  }
}
