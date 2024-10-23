import ProductFactory from "./product.factory";

describe("Product factory unit tests", () => {
  test("should create a product type a", () => {
    const product = ProductFactory.create("a", "Product A", 1);
    expect(product.id).toBeDefined();
    expect(product.name).toBe("Product A");
    expect(product.constructor.name).toBe("Product")
  })
})