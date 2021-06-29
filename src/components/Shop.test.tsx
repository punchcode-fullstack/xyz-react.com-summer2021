import { render } from "@testing-library/react";

import Shop from "./Shop";

describe("Shop", () => {
  it("exists", () => {
    expect(typeof Shop).toBe("function");
  });
  it("has class Shop", () => {
    const ui = render(<Shop />);
    expect(ui.getByTestId("Shop")).toHaveClass("Shop");
  });
  it("shows the product list", () => {
    const ui = render(<Shop />);
    const productList = ui.getByTestId("ProductList");
    expect(productList).toBeInTheDocument();
  });
});
