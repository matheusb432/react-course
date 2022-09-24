import { ChangeEvent, useCallback, useReducer } from 'react';
import { InputElement } from '../../types';
import { initialState, InputActions, inputReducer } from './reducer';

export function useInput<TElement extends InputElement = HTMLInputElement>(
  validateValue?: (value: string) => boolean
) {
  const [state, dispatch] = useReducer(inputReducer, initialState);
  const { value, touched } = state;

  const isValid = validateValue?.(value) ?? true;
  const hasError = !isValid && touched;

  const changeHandler = (event: ChangeEvent<TElement>) => {
    dispatch({ type: InputActions.InputChange, payload: event.target.value });
  };

  const setValue = useCallback((val: string) => {
    dispatch({ type: InputActions.InputChange, payload: val });
  }, []);

  const blurHandler = () => {
    dispatch({ type: InputActions.InputBlur });
  };

  const touch = (val = true) => {
    dispatch({ type: InputActions.InputTouch, payload: val });
  };

  const reset = () => {
    dispatch({ type: InputActions.InputReset });
  };

  return {
    value,
    isValid,
    hasError,
    touched,
    changeHandler,
    setValue,
    blurHandler,
    touch,
    reset,
  };
}
