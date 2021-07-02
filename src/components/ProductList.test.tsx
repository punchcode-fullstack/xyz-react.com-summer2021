import { act, render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import Api from "../api";

import products from "../data/products.json";

jest.mock("../api");

describe("ProductList", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("exists", () => {
    expect(typeof ProductList).toBe("function");
  });
  it("renders a list of products", async () => {
    fetch.mockResponseOnce(JSON.stringify(products))
    const promise = Promise.resolve(products);
    Api.getProducts = jest.fn(() => promise);

    render(<ProductList />);
    await act(() => promise);

    expect(screen.getByTestId("ProductList")).toHaveClass("ProductList");

    const productElements = screen.queryAllByTestId("Product");
    expect(productElements.length).toEqual(products.length);
  });
});
