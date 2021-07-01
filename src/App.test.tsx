import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import App from './App'

function renderUi() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
}
test('renders', () => {
  renderUi()
  const companyName = screen.getByText('XYZ Corporation')
  expect(companyName).toBeInTheDocument()
})

describe('App', () => {
  it('shows the Shop by default', () => {
    const ui = renderUi()
    const shop = ui.getByTestId('Shop')
    expect(shop).toBeInTheDocument()
  })
  it('navigates correctly between pages', () => {
    const ui = renderUi()
    const cartLink = ui.getByText('Cart')

    cartLink.click()
    const cart = ui.getByTestId('Cart')
    expect(cart).toBeInTheDocument()

    const shopLink = ui.getByLabelText('shop')
    shopLink.click()
    const shop = ui.getByTestId('Shop')
    expect(shop).toBeInTheDocument()
  })
})
