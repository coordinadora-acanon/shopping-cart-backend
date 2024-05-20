export class ProductDto {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public image: string,
    public description: string
  ) {}
}
