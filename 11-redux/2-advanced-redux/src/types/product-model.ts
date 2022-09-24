export class ProductModel {
  id: string;
  title: string;
  price: number;
  description: string;

  private constructor(
    id: string,
    title: string,
    price: number,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }

  static fromNewItem(product: ProductModel) {
    if (product == null) return null;

    const { id, title, price, description } = product;

    return this.fromNewProps(id, title, price, description);
  }

  static fromNewProps(
    id: string,
    title: string,
    price: number,
    description: string
  ) {
    return new ProductModel(id, title, price, description);
  }
}
