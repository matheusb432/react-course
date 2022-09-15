import { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';

// NOTE adding InputHTMLAttributes to enable passing HTML attributes directly to the input element
// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
interface InputProps {
  input: InputHTMLAttributes<HTMLInputElement>;
  label: string;
}

// const Input = ({ label, ...elProps }: InputProps) => {
const Input = ({ label, input }: InputProps) => {
  return (
    <div className={styles['input-wrapper']}>
      <label htmlFor={input.id}>{label}</label>
      {/* NOTE adding default value when using HTMLAttributes as props */}
      <input type="number" {...input} />
    </div>
  );
};

export { Input };
