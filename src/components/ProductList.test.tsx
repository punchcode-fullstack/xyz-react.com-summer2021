import { render } from "@testing-library/react";
import ProductList from "./ProductList";

import products from "../data/products.json";

describe("ProductList", () => {
  it("exists", () => {
    expect(typeof ProductList).toBe("function");
  });
  it('has class of "ProductList"', () => {
  const ui = render(<ProductList />);
  expect(ui.getByTestId("ProductList")).toHaveClass("ProductList");
});
});
