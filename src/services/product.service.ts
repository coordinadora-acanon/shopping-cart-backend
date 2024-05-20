import { ProductRepository } from "../repositories/product.repository";
import { ProductDto } from "../dtos/product.dto";

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  getProducts(): ProductDto[] {
    return this.productRepository.getProducts();
  }
}
