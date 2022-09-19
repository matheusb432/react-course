import { forwardRef, SyntheticEvent, useImperativeHandle } from 'react';
import { Input } from '../../../components';
import { useInput } from '../../../hooks/use-input';
import { validateText } from '../../../utils';
import { Order } from './order';
import styles from './style.module.scss';

interface CartFormProps {
  onSubmit: (order: Order) => void;
}

export interface CartFormForwardRef {
  name: string;
  address: string;
  isValid: boolean;
  touchInputs: () => void;
  resetInputs: () => void;
}

const CartForm = forwardRef<CartFormForwardRef, CartFormProps>(
  ({ onSubmit }: CartFormProps, ref) => {
    const {
      value: name,
      isValid: nameIsValid,
      hasError: nameHasError,
      changeHandler: nameChangeHandler,
      blurHandler: nameBlurHandler,
      touch: nameTouch,
      reset: nameReset,
    } = useInput(validateText);

    const {
      value: address,
      isValid: addressIsValid,
      hasError: addressHasError,
      changeHandler: addressChangeHandler,
      blurHandler: addressBlurHandler,
      touch: addressTouch,
      reset: addressReset,
    } = useInput(validateText);

    const formIsValid = nameIsValid && addressIsValid;

    const handleSubmitEvent = (event: SyntheticEvent) => {
      event.preventDefault();

      touchInputs();

      if (!formIsValid) return;

      const order = {
        name,
        address,
      };

      resetInputs();

      onSubmit(order);
    };

    const touchInputs = () => {
      nameTouch();
      addressTouch();
    };

    const resetInputs = () => {
      nameReset();
      addressReset();
    };

    useImperativeHandle(ref, () => {
      return {
        name,
        address,
        isValid: formIsValid,
        touchInputs,
        resetInputs,
      };
    });

    return (
      <form onSubmit={handleSubmitEvent}>
        <Input
          label="Name"
          input={{
            value: name,
            id: 'inputName',
            onChange: nameChangeHandler,
            onBlur: nameBlurHandler,
          }}
          hasError={nameHasError}
          validityText="Please enter a valid name"
        />
        <Input
          label="Address"
          input={{
            value: address,
            id: 'inputAddress',
            onChange: addressChangeHandler,
            onBlur: addressBlurHandler,
          }}
          hasError={addressHasError}
          validityText="Please enter a valid address"
        />
      </form>
    );
  }
);

export { CartForm };
