import { render } from "@testing-library/react";

import App from '../App'
import Product from './Product'
import products from '../data/products.json'


describe("Product", () => {
  function renderUi(){
    return render(
      <Product
        product={products[0]}
      />
    )
  }

  it('exists', () => {
    expect(typeof Product).toBe('function')
  })
  it('has class of "Product"', () => {
    const ui = renderUi()
    expect(ui.getByTestId('Product')).toHaveClass('Product')
  })
  it('has all required fields', () => {
    const product1 = products[0]
    const ui = renderUi()
    const product = ui.getByTestId("Product");
    expect(product).toHaveTextContent(product1.name);
    expect(product).toHaveTextContent(String(product1.price));
  });
  it("has an add to cart button", () => {
    const ui = renderUi()
    const btn = ui.getByRole("button");
    expect(btn).toHaveTextContent("Add to Cart");
  });
  it("adds a new item to the cart when 'Add to Cart' is clicked", () => {
    const product1 = products[0]
    const ui = render(<App />)
    const addToCartButtons = ui.getAllByRole('button')
    const btnAddToCart = addToCartButtons[0] // should be product1
    const cartLink = ui.getByText('Cart')

    btnAddToCart.click() // add to cart
    cartLink.click() // visit cart

    const cartItems = ui.getAllByTestId('CartItem')
    expect(cartItems.length).toBe(1)
    const firstCartItem = cartItems[0]
    expect(firstCartItem).toHaveTextContent(product1.name)
    expect(firstCartItem).toHaveTextContent(String(product1.price))
    expect(firstCartItem).toHaveTextContent('qty: 1')
  })
  it('keeps track of item qty, subtotal, and recalculates the cart when adding new items', () => {
    const product1 = products[0]
    const ui = render(<App />)

    // make sure that we're looking at the shop
    const shopLink = ui.getByLabelText('shop')
    shopLink.click()

    const addToCartButtons = ui.getAllByRole('button')
    const btnAddToCart = addToCartButtons[0] // should be product1
    const cartLink = ui.getByText('Cart')

    btnAddToCart.click() // add to cart once
    btnAddToCart.click() // add to cart twice
    cartLink.click() // visit cart

    const cartItems = ui.getAllByTestId('CartItem')
    expect(cartItems.length).toBe(1)

    // should be only 1 item in the cart
    const firstCartItem = cartItems[0]
    expect(firstCartItem).toHaveTextContent(product1.name)
    expect(firstCartItem).toHaveTextContent(String(product1.price))
    expect(ui.getByLabelText('item count')).toHaveTextContent('1')

    // the item should be in there twice
    expect(firstCartItem).toHaveTextContent('qty: 2')
    expect(ui.getByLabelText('subtotal')).toHaveTextContent(
      String(product1.price * 2)
    )
  })
})
