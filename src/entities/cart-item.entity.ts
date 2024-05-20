export class CartItem {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly quantity: number,
    public readonly price: number
  ) {}
}
