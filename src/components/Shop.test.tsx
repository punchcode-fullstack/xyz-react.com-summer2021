import { act, render, screen } from "@testing-library/react";

import Api from "../api";

import products from "../data/products.json";
import Shop from "./Shop";

describe("Shop", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("exists", () => {
    expect(typeof Shop).toBe("function");
  });
  it("shows the product list", async () => {
    fetch.mockResponseOnce(JSON.stringify(products));
    const promise = Promise.resolve(products);
    Api.getProducts = jest.fn(() => promise);

    render(<Shop />);
    await act(() => promise);

    expect(screen.getByTestId("Shop")).toHaveClass("Shop");
    expect(screen.getByTestId("ProductList")).toBeInTheDocument();
  });
});
