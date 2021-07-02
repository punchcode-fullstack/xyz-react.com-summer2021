import { render, screen } from "@testing-library/react";

import useCart from "../hooks/useCart";

import Cart from "./Cart";

jest.mock("../hooks/useCart");

describe("Cart", () => {
  const mockCalculateCart = jest.fn()
  
  beforeEach(() => {
    jest.clearAllMocks()
    useCart.mockReturnValue({
      cartItems: [],
      calculateCart: mockCalculateCart.mockReturnValue(0),
    });
  });
  it("exists", () => {
    expect(typeof Cart).toBe("function");
  });
  it("starts empty", () => {
    render(<Cart />);

    expect(screen.getByTestId("Cart")).toHaveClass("Cart");
    expect(screen.queryAllByTestId("CartItem").length).toBe(0);
    expect(mockCalculateCart).toHaveBeenCalledTimes(1)
    expect(screen.getByLabelText("subtotal")).toHaveTextContent("0.00");
    expect(screen.getByLabelText("item count")).toHaveTextContent("0");
  });
});
