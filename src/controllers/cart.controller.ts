import { Request, Response } from "express";

import logger from "../utils/logger";
import { CartRepository } from "../repositories/cart.repository";
import { CartService } from "../services/cart.service";

const cartRepository = new CartRepository();
const cartService = new CartService(cartRepository);

export class CartController {
  static getCart(req: Request, res: Response): void {
    try {
      const cart = cartService.getCart();
      logger.info("Fetching cart contents", { cart });
      res.json(cart);
    } catch (error) {
      logger.error("Error fetching cart contents", { error });
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static addItem(req: Request, res: Response): void {
    try {
      cartService.addItem(req.body);
      logger.info("Adding item to cart", { item: req.body });
      res.status(201).send();
    } catch (error) {
      logger.error("Error adding item to cart", { error });
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static removeItem(req: Request, res: Response): void {
    try {
      cartService.removeItem(req.params.id);
      logger.info("Removing item from cart", { itemId: req.params.id });
      res.status(204).send();
    } catch (error) {
      logger.error("Error removing item from cart", { error });
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static clearCart(req: Request, res: Response): void {
    try {
      cartService.clearCart();
      logger.info("Clearing cart");
      res.status(204).send();
    } catch (error) {
      logger.error("Error clearing cart", { error });
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
