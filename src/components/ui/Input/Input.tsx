import React from 'react';
import styles from './Input.module.scss';

const Input = (props: any): JSX.Element => {
  return <input {...props} className={styles.input} />;
};

export default Input;
