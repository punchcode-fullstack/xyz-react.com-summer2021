import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
  it("exists", () => {
    expect(typeof Product).toBe("function");
  });
  it('has class of "Product"', () => {
      const ui = render(<Product />)
      expect(ui.getByTestId('Product')).toHaveClass('Product')
  });
  it.todo("has all required fields");
  it.todo("has a working add to cart button");
});
