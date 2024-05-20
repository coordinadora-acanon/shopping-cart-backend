import { CartItem } from "../entities/cart-item.entity";

export class CartRepository {
  private items: CartItem[] = [];

  getCart(): CartItem[] {
    return this.items;
  }

  addItem(item: CartItem): void {
    this.items.push(item);
  }

  removeItem(itemId: string): void {
    this.items = this.items.filter((item) => item.id !== itemId);
  }

  clearCart(): void {
    this.items = [];
  }
}
