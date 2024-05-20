import { ProductRepository } from "../repositories/product.repository";
import { Product } from "../entities/product.entity";

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }
}
