import { render, screen } from "@testing-library/react";

import App from "../App";
import CartItem from "./CartItem";
import products from "../data/products.json";
import type { Product as ProductType } from "./Product.types";
import useCart from "../hooks/useCart";

jest.mock("../hooks/useCart");

function renderUi(product=products[0]){
  render(
    <CartItem
      id={product.id}
      name={product.name}
      price={product.price}
      thumbnail={product.thumbnail}
      qty={1}
    />
  );
}

describe("CartItem", () => {
  const mockIncrementCartItemQty = jest.fn();
  const mockDecrementCartItemQty = jest.fn();
  const mockRemoveFromCart = jest.fn();
  beforeEach(()=>{
    jest.clearAllMocks()
    useCart.mockReturnValue({
      decrementCartItemQty: mockDecrementCartItemQty,
      incrementCartItemQty: mockIncrementCartItemQty,
      removeFromCart: mockRemoveFromCart,
    });
  })
  it("exists", () => {
    expect(typeof CartItem).toBe("function");
  });
  it("has an increment qty button that increments the item quantity", () => {
    const product1 = products[0]
    renderUi(product1)
    screen.getByLabelText("increment quantity").click();
    expect(screen.getByTestId("CartItem")).toBeInTheDocument();
    expect(screen.getByTestId("CartItem")).toHaveTextContent(product1.name);
    expect(screen.getByTestId("CartItem")).toHaveTextContent(
      String(product1.price)
    );
    expect(mockIncrementCartItemQty).toHaveBeenCalledTimes(1);
    expect(mockIncrementCartItemQty).toHaveBeenCalledWith(product1.id);
  });
  it("has a decrement qty button that decrements the item quantity", () => {
    const product1 = products[0]
    renderUi(product1)
    screen.getByLabelText("decrement quantity").click();
    expect(screen.getByTestId("CartItem")).toBeInTheDocument();
    expect(screen.getByTestId("CartItem")).toHaveTextContent(product1.name);
    expect(screen.getByTestId("CartItem")).toHaveTextContent(
      String(product1.price)
    );
    expect(mockDecrementCartItemQty).toHaveBeenCalledTimes(1);
    expect(mockDecrementCartItemQty).toHaveBeenCalledWith(product1.id);
  });
  it("has a remove button that removes the item from the cart", () => {
    const product1 = products[0]
    renderUi(product1)
    screen.getByLabelText("remove from cart").click();
    expect(screen.getByTestId("CartItem")).toBeInTheDocument();
    expect(screen.getByTestId("CartItem")).toHaveTextContent(product1.name);
    expect(screen.getByTestId("CartItem")).toHaveTextContent(
      String(product1.price)
    );
    expect(mockRemoveFromCart).toHaveBeenCalledTimes(1);
    expect(mockRemoveFromCart).toHaveBeenCalledWith(product1.id);
  });
});
