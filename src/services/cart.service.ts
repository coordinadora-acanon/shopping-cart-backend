import { CartRepository } from "../repositories/cart.repository";
import { CartItemDto } from "../dtos/cart-item.dto";
import { CartItem } from "../entities/cart-item.entity";

export class CartService {
  constructor(private readonly cartRepository: CartRepository) {}

  getCart(): CartItemDto[] {
    return this.cartRepository.getCart();
  }

  addItem(itemDto: CartItemDto): void {
    const item = new CartItem(
      itemDto.id,
      itemDto.name,
      itemDto.quantity,
      itemDto.price
    );
    this.cartRepository.addItem(item);
  }

  removeItem(itemId: string): void {
    this.cartRepository.removeItem(itemId);
  }

  clearCart(): void {
    this.cartRepository.clearCart();
  }
}
