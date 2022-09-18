import { ChangeEvent, useReducer } from 'react';
import { InputElement } from '../../types';
import { initialState, InputActions, inputReducer } from './reducer';

// NOTE custom generic hook for input value state management
export function useInput<TElement extends InputElement = HTMLInputElement>(
  validateValue: (value: string) => boolean
) {
  const [state, dispatch] = useReducer(inputReducer, initialState);
  const { value, touched } = state;

  // NOTE validation on every keystroke strategy, best UX since it provides instant feedback
  const isValid = validateValue(value);
  const hasError = !isValid && touched;

  const changeHandler = (event: ChangeEvent<TElement>) => {
    dispatch({ type: InputActions.InputChange, payload: event.target.value });
  };

  const blurHandler = () => {
    dispatch({ type: InputActions.InputBlur });
  };

  const touch = (touch = true) => {
    dispatch({ type: InputActions.InputTouch, payload: touch });
  };

  const reset = () => {
    dispatch({ type: InputActions.InputReset });
  };

  const validityParagraph = (text: string) =>
    hasError && <p className="error-text">{text}</p>;

  return {
    value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    touch,
    reset,
    validityParagraph,
  };
}

// NOTE alternative for useInput without a reducer
// export function useInput<TElement extends InputElement = HTMLInputElement>(
//   validateValue: (value: string) => boolean
// ) {
//   const [value, setValue] = useState('');
//   const [touched, setTouched] = useState(false);
//   const isValid = validateValue(value);
//   const hasError = !isValid && touched;
//   const changeHandler = (event: ChangeEvent<TElement>) => {
//     setValue(event.target.value);
//   };
//   const blurHandler = () => {
//     setTouched(true);
//   };
//   const clear = () => {
//     setValue('');
//   };
//   const touch = (touch = true) => {
//     setTouched(touch);
//   };
//   const reset = () => {
//     clear();
//     touch(false);
//   };
//   const validityParagraph = (text: string) =>
//     hasError && <p className="error-text">{text}</p>;
//   return {
//     value,
//     isValid,
//     hasError,
//     changeHandler,
//     blurHandler,
//     touch,
//     reset,
//     validityParagraph,
//   };
// }
