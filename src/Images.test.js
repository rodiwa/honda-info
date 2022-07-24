import { render, screen } from '@testing-library/react';
import Images from './Images';

test('renders image section header', () => {
  render(<Images />);
  const imageHeader = screen.getByTestId('image-header');
  expect(imageHeader).toBeInTheDocument();
  expect(imageHeader).toHaveTextContent(/images/i);
});
