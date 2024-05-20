import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import { ProductRepository } from "../repositories/product.repository";

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);

export class ProductController {
  static getProducts(req: Request, res: Response): void {
    res.json(productService.getProducts());
  }
}
