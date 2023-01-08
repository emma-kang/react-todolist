import { render, screen } from '@testing-library/react';
import App from './App';

// should create front-end test code
// if it is needed, add e2e test as well (this will be seperated files)
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
