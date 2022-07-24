import { render, screen } from '@testing-library/react';
import Images from './Images';

test('renders image section header', () => {
  render(<Images />);
  const imageHeader = screen.getByTestId('image-header');
  expect(imageHeader).toBeInTheDocument();
  expect(imageHeader).toHaveTextContent(/images/i);
});

// FIXME: run home tests instead
// import { render, screen } from '@testing-library/react';
// import Home from './Home';

// test('renders summary section', () => {
//   render(<Home />);
//   const headerSection = screen.getByTestId('summary-header');
//   expect(headerSection).toBeInTheDocument();
//   expect(headerSection).toHaveTextContent(/summary/i);
// });

// test('renders images section', () => {
//   render(<Home />);
//   const headerSection = screen.getByText(/Images/i);
//   expect(headerSection).toBeInTheDocument();
// });

// test('renders faq section', () => {
//   render(<Home />);
//   const headerSection = screen.getByText(/Summary/i);
//   expect(headerSection).toBeInTheDocument();
// });

// test('renders contact section', () => {
//   render(<Home />);
//   const headerSection = screen.getByText(/Contact/i);
//   expect(headerSection).toBeInTheDocument();
// });
