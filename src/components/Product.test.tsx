import { render, screen } from "@testing-library/react";

import App from '../App'
import Product from "./Product";
import products from "../data/products.json";

const mockAddItemToCart = jest.fn()


describe("Product", () => {
  function renderUi(){
    return render(
      <Product
        product={products[0]}
        addItemToCart={mockAddItemToCart}
      />
    )
  }

  it("exists", () => {
    expect(typeof Product).toBe("function");
  });
  it('has class of "Product"', () => {
    const ui = renderUi()
    expect(ui.getByTestId("Product")).toHaveClass("Product");
  });
  it("has all required fields", () => {
    const product1 = products[0];
    const ui = renderUi()
    const product = ui.getByTestId("Product");
    expect(product).toHaveTextContent(product1.name);
    expect(product).toHaveTextContent(String(product1.price));
  });
  it("has an add to cart button", () => {
    const product1 = products[0];
    const ui = renderUi()
    const btn = ui.getByRole("button");
    expect(btn).toHaveTextContent("Add to Cart");
    btn.click()
    expect(mockAddItemToCart).toHaveBeenCalledTimes(1)
    expect(mockAddItemToCart).toHaveBeenCalledWith(product1)
  });
  it("adds a new item to the cart when 'Add to Cart' is clicked", () => {
    const product1 = products[0];
    const ui = render(<App />);
    const addToCartButtons = ui.getAllByRole("button");
    const btnAddToCart = addToCartButtons[0]; // should be product1
    const cartLink = ui.getByText("Cart");

    btnAddToCart.click(); // add to cart
    cartLink.click(); // visit cart

    const cartItems = ui.getAllByTestId("CartItem");
    expect(cartItems.length).toBe(1);
    const firstCartItem = cartItems[0]
    expect(firstCartItem).toHaveTextContent(product1.name)
    expect(firstCartItem).toHaveTextContent(String(product1.price))
  });
});
