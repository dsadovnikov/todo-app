import React from 'react';
import styles from './Button.module.scss';

export enum ButtonType {
  button = 'button',
  reset = 'reset',
  submit = 'submit',
}

interface ButtonProps {
  type: ButtonType;
  onClick?: (props: any) => any;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  type,
  onClick,
  disabled,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={styles.button}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
