import { Product } from "../entities/product.entity";

export class ProductRepository {
  private products: Product[] = [
    new Product("1", "Product 1", 10),
    new Product("2", "Product 2", 20),
    new Product("3", "Product 3", 30),
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
