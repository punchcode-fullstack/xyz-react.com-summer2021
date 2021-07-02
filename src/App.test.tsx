import { act, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Api from "./api";

import products from "./data/products.json";

import App from './App'

function renderUi() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
}

describe('App', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('shows the Shop by default', async () => {
    fetch.mockResponseOnce(JSON.stringify(products))
    const promise = Promise.resolve(products);
    Api.getProducts = jest.fn(() => promise);

    renderUi()
    await act(() => promise);
    expect(screen.getByTestId('Shop')).toBeInTheDocument()
  })
  it('navigates correctly between pages', async () => {
    fetch.mockResponseOnce(JSON.stringify(products))
    const promise = Promise.resolve(products);
    Api.getProducts = jest.fn(() => promise);
  
    renderUi()
    await act(() => promise);
    
    screen.getByText('Cart').click()
    await act(() => promise);
    expect(screen.getByTestId('Cart')).toBeInTheDocument()
    
    screen.getByLabelText('shop').click()
    await act(() => promise);
    expect(screen.getByTestId('Shop')).toBeInTheDocument()
  })
})
