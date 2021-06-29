import { render, screen } from "@testing-library/react";
import Product from "./Product";
import products from "../data/products.json";

describe("Product", () => {
  it("exists", () => {
    expect(typeof Product).toBe("function");
  });
  it('has class of "Product"', () => {
      const product1 = products[0]
    const ui = render(<Product {...product1} />);
    expect(ui.getByTestId("Product")).toHaveClass("Product");
  });
  it("has all required fields", () => {
    const product1 = products[0];
    const ui = render(<Product {...product1} />);
    const product = ui.getByTestId("Product");
    expect(product).toHaveTextContent(product1.name);
    expect(product).toHaveTextContent(String(product1.price));
  });
  it("has an add to cart button", () => {
      const product1 = products[0];
      const ui = render(<Product {...product1} />)
      const btn = ui.getByRole("button")
      expect(btn).toHaveTextContent('Add to Cart')
  });
});
