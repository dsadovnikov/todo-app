import { render, screen } from '@testing-library/react';
import Button, { ButtonType } from './Button';

test('Button render', () => {
  render(<Button type={ButtonType.button} />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
