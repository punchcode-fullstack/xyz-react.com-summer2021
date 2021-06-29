import { render } from "@testing-library/react";
import ProductList from "./ProductList";

import products from "../data/products.json";

describe("ProductList", () => {
  it("exists", () => {
    expect(typeof ProductList).toBe("function");
  });
  it('has class of "ProductList"', () => {
    const ui = render(<ProductList products={products} />);
    expect(ui.getByTestId("ProductList")).toHaveClass("ProductList");
  });
  it('renders a list of products', () => {
      const ui = render(<ProductList products={products} />)
      const productElements = ui.getAllByTestId('Product')
      expect(productElements.length).toEqual(products.length)
  })
});
