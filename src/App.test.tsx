import { render, screen } from '@testing-library/react';
import App from './App';
import Product from './components/Product'

test('renders', () => {
  render(<App />);
  const companyName = screen.getByText(/XYZ Corporation/i);
  expect(companyName).toBeInTheDocument();
});

describe('Product', () => {
  it('exists', () => {
    expect(typeof Product).toBe('function')
  })
  it.todo('has all required fields')
  it.todo('has a working add to cart button')
})