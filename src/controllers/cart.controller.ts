import { Request, Response } from "express";
import { CartService } from "../services/cart.service";
import { CartRepository } from "../repositories/cart.repository";

const cartRepository = new CartRepository();
const cartService = new CartService(cartRepository);

export class CartController {
  static getCart(req: Request, res: Response): void {
    res.json(cartService.getCart());
  }

  static addItem(req: Request, res: Response): void {
    cartService.addItem(req.body);
    res.status(201).send();
  }

  static removeItem(req: Request, res: Response): void {
    cartService.removeItem(req.params.id);
    res.status(204).send();
  }

  static clearCart(req: Request, res: Response): void {
    cartService.clearCart();
    res.status(204).send();
  }
}
