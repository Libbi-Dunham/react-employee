import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders app description', async () => {
  render(<App />);
  const linkElement = await screen.findByText(`Welcome to Acem Inc.`);
  expect(linkElement).toBeInTheDocument();
});
