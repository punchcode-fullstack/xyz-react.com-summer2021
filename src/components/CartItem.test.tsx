import { render } from "@testing-library/react";

import App from "../App";
import CartItem from "./CartItem";
import products from "../data/products.json";
import type { Product as ProductType } from "./Product.types";

function renderUi() {
  const product1: ProductType = products[0];
  return render(<CartItem {...product1} qty={1} />);
}
describe("CartItem", () => {
  it("exists", () => {
    expect(typeof CartItem).toBe("function");
  });
  it("has class CartItem", () => {
    const ui = renderUi();
    expect(ui.getByTestId("CartItem")).toHaveClass("CartItem");
  });
  it("has an increment qty button that increments the item quantity", () => {
    const product1 = products[0];

    const ui = render(<App />);
    // make sure that we're looking at the shop
    const shopLink = ui.getByText("XYZ Corporation");
    shopLink.click();
    const addToCartButtons = ui.getAllByRole("button");
    const btnAddToCart = addToCartButtons[0]; // should be product1
    const cartLink = ui.getByText("Cart");
    btnAddToCart.click(); // add to cart once

    // visit the cart
    cartLink.click();
    const incrementBtn = ui.getByLabelText("increment quantity");
    incrementBtn.click();

    const cartItems = ui.getAllByTestId("CartItem");
    const firstCartItem = cartItems[0];
    expect(firstCartItem).toHaveTextContent(product1.name);
    expect(firstCartItem).toHaveTextContent(String(product1.price));
    expect(ui.getByLabelText("quantity")).toHaveTextContent("qty: 2");
  });
  it("has a decrement qty button that decrements the item quantity", () => {
    const product1 = products[0];

    const ui = render(<App />);
    // make sure that we're looking at the shop
    const shopLink = ui.getByText("XYZ Corporation");
    shopLink.click();
    const addToCartButtons = ui.getAllByRole("button");
    const btnAddToCart = addToCartButtons[0]; // should be product1
    const cartLink = ui.getByText("Cart");
    btnAddToCart.click(); // add to cart once
    btnAddToCart.click(); // add to cart twice

    // visit the cart
    cartLink.click();
    expect(ui.getByLabelText("quantity")).toHaveTextContent("qty: 2");

    const decrementBtn = ui.getByLabelText("decrement quantity");
    decrementBtn.click();

    const cartItems = ui.getAllByTestId("CartItem");
    const firstCartItem = cartItems[0];
    expect(firstCartItem).toHaveTextContent(product1.name);
    expect(firstCartItem).toHaveTextContent(String(product1.price));
    expect(ui.getByLabelText("quantity")).toHaveTextContent("qty: 1");

    // cannot decrement below 1
    decrementBtn.click();
    decrementBtn.click();
    decrementBtn.click();
    expect(ui.getByLabelText("quantity")).toHaveTextContent("qty: 1");
  });
  it("has a remove button that removes the item from the cart", () => {
    const product1 = products[0];

    const ui = render(<App />);
    // make sure that we're looking at the shop
    const shopLink = ui.getByText("XYZ Corporation");
    shopLink.click();
    const addToCartButtons = ui.getAllByRole("button");
    const btnAddToCart = addToCartButtons[0]; // should be product1
    const cartLink = ui.getByText("Cart");
    btnAddToCart.click(); // add to cart once

    // visit the cart
    cartLink.click();

    const removeBtn = ui.getByLabelText("remove from cart");
    removeBtn.click();

    const cartItems = ui.queryAllByTestId("CartItem");
    expect(cartItems.length).toBe(0);
  });
});
