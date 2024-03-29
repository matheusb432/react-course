import styles from './FormInput.module.scss';

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
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={updateValue}
      />
    </div>
  );
};

export default FormInput;
