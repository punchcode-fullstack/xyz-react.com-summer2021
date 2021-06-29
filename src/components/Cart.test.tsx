import { render } from "@testing-library/react";

import Cart from "./Cart";

describe("Cart", () => {
  it("exists", () => {
    expect(typeof Cart).toBe("function");
  });
  it("has class Cart", () => {
    const ui = render(<Cart />);
    expect(ui.getByTestId("Cart")).toHaveClass("Cart");
  });
  it("starts empty", () => {
    const ui = render(<Cart />);
    expect(ui.queryAllByTestId("CartItem").length).toBe(0);
    expect(ui.getByLabelText("subtotal")).toHaveTextContent("0.00");
    expect(ui.getByLabelText("item count")).toHaveTextContent('0');
  });
});
