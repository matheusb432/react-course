import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = memo(({ children, ...button }: ButtonProps) => {
  console.log('Button ran!');
  return (
    <button
      type="button"
      {...button}
      className={`${classes.button} ${button.className}`}>
      {children}
    </button>
  );
});

export { Button };
