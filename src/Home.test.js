import { render, screen } from '@testing-library/react';
import App from './App';

test('renders summary section', () => {
  render(<App />);
  const linkElement = screen.getByText(/Summary/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders images section', () => {
  render(<App />);
  const linkElement = screen.getByText(/Images/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders faq section', () => {
  render(<App />);
  const linkElement = screen.getByText(/Summary/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
});