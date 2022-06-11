import { render, screen } from '@testing-library/react';
import Input from './Input';

test('Input render', () => {
  render(<Input />);
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});
