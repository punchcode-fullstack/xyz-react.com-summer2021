import { render, screen } from "@testing-library/react";

import App from '../App'
import Product from './Product'
import products from '../data/products.json'
import useCart from '../hooks/useCart'

jest.mock('../hooks/useCart')

describe("Product", () => {
  const mockAddItemToCart = jest.fn()

  beforeEach(()=>{
    jest.clearAllMocks()
    useCart.mockReturnValue({
      addItemToCart: mockAddItemToCart,
    });
  })
  function renderUi(product=products[0]){
    return render(
      <Product
        product={product}
      />
    )
  }

  it('exists', () => {
    expect(typeof Product).toBe('function')
  })
  it('has class of "Product"', () => {
    renderUi()
    expect(screen.getByTestId('Product')).toHaveClass('Product')
  })
  it('has all required fields', () => {
    const product1 = products[0]
    renderUi(product1)
    expect(screen.getByTestId("Product")).toHaveTextContent(product1.name);
    expect(screen.getByTestId("Product")).toHaveTextContent(String(product1.price));
  });
  it("has an add to cart button", () => {
    const product1 = products[0]
    renderUi(product1)
    expect(screen.getByRole("button")).toHaveTextContent("Add to Cart");
    screen.getByRole("button").click();
    expect(mockAddItemToCart).toHaveBeenCalledTimes(1)
    expect(mockAddItemToCart).toHaveBeenCalledWith(product1)
  });
})
