import { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';

interface InputProps {
  input: InputHTMLAttributes<HTMLInputElement>;
  label: string;
  hasError?: boolean;
  validityText?: string;
}

const Input = ({
  label,
  input,
  hasError = false,
  validityText = 'Invalid input!',
}: InputProps) => {
  return (
    <div
      className={`${styles['input-wrapper']} ${
        hasError ? styles.invalid : ''
      }`}>
      <label htmlFor={input.id}>{label}</label>
      {/* NOTE adding default value when using HTMLAttributes as props */}
      <input type="text" {...input} />
      {hasError && <p className="error-text">{validityText}</p>}
    </div>
  );
};

export { Input };
