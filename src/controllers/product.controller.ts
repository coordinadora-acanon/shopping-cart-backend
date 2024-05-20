import { Request, Response } from "express";
import logger from "../utils/logger";
import { ProductService } from "../services/product.service";
import { ProductRepository } from "../repositories/product.repository";

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);

export class ProductController {
  static getProducts(req: Request, res: Response): void {
    try {
      const products = productService.getProducts();
      logger.info("Fetching all products", { products });
      res.json(products);
    } catch (error) {
      logger.error("Error fetching all products", { error });
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
