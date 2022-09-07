import { ChangeEvent, forwardRef, useImperativeHandle, useState } from 'react';

import useInputRef from '../../../hooks/use-input-ref';
import styles from './Input.module.scss';

interface InputProps {
  type: string;
  id: string;
  label: string;
  isInvalid?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

export interface InputForwardRef {
  activate: () => void;
}

// NOTE forwarRef allows for this component to receive a ref from a parent component
const Input = forwardRef<InputForwardRef, InputProps>(
  (
    { type, id, label, onChange, onBlur, isInvalid = false }: InputProps,
    ref
  ) => {
    const [touched, setTouched] = useState(false);
    const inputRef = useInputRef();

    const focusInput = () => {
      inputRef.current?.focus();
    };

    const handleBlur = () => {
      setTouched(true);

      onBlur?.();
    };

    // NOTE useImperativeHandle exposes this components functions to any parent components
    useImperativeHandle(ref, () => {
      return {
        activate: focusInput,
      };
    });

    return (
      <div
        className={`${styles.control} ${
          touched && isInvalid ? styles.invalid : ''
        }`}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          onBlur={handleBlur}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default Input;
