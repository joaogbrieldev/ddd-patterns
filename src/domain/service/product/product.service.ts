import Product from "../../entity/product/product";

export class ProductService {
  static increasePrice(products: Product[], percentagem: number): void {
    products.forEach((product) => {
      product.changePrice((product.price * percentagem) / 100 + product.price);
    });
  }
}
