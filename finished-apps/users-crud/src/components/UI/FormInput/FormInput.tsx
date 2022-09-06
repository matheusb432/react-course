import styles from './FormInput.module.css';

import { ChangeInputEvent } from '../../../types/change-input-event';

interface FormInputProps {
  type?: string;
  label: string;
  value: string;
  changeValue: (ev: string) => void;
}

const FormInput = ({
  type = 'text',
  label,
  value,
  changeValue,
}: FormInputProps) => {
  const updateValue = (event: ChangeInputEvent) => {
    changeValue(event.target.value);
  };

  return (
    <div className={styles['form-input']}>
      <label>{label}</label>
      <input type={type} value={value} onChange={updateValue} />
    </div>
  );
};

export default FormInput;
