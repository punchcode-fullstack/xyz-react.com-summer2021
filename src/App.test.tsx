import { render, screen } from '@testing-library/react';
import App from './App';


test('renders', () => {
  render(<App />);
  const companyName = screen.getByText(/XYZ Corporation/i);
  expect(companyName).toBeInTheDocument();
});

describe('App', () => {
  it('shows the Shop by default', () => {
    const ui = render(<App />)
    const shop = ui.getByTestId('Shop')
    expect(shop).toBeInTheDocument()
  })
})

