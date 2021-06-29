import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const companyName = screen.getByText(/XYZ Corporation/i);
  expect(companyName).toBeInTheDocument();
});
