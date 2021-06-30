import { render } from "@testing-library/react";

import App from '../App'
import Cart from "./Cart";
import products from '../data/products.json'


describe("Cart", () => {
  it("exists", () => {
    expect(typeof Cart).toBe("function");
  });
  it("has class Cart", () => {
    const ui = render(<Cart cartItems={[]} />);
    expect(ui.getByTestId("Cart")).toHaveClass("Cart");
  });
  it("starts empty", () => {
    const ui = render(<Cart cartItems={[]} />);
    expect(ui.queryAllByTestId("CartItem").length).toBe(0);
    expect(ui.getByLabelText("subtotal")).toHaveTextContent("0.00");
    expect(ui.getByLabelText("item count")).toHaveTextContent('0');
  });
  it("updates the number of items in the cart when a new item is added", () => {
    const product1 = products[0];
    const ui = render(<App />);
    const addToCartButtons = ui.getAllByRole("button");
    const btnAddToCart = addToCartButtons[0]; // should be product1
    const cartLink = ui.getByText("Cart");

    btnAddToCart.click(); // add to cart
    cartLink.click(); // visit cart

    const cartItems = ui.getAllByTestId("CartItem");
    expect(cartItems.length).toBe(1);

    expect(ui.getByLabelText("subtotal")).toHaveTextContent(String(product1.price));
    expect(ui.getByLabelText("item count")).toHaveTextContent('1');

  })
});
