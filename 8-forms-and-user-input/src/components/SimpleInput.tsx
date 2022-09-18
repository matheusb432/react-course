import { SyntheticEvent } from 'react';
import { useInput } from '../hooks';

const SimpleInput = () => {
  // NOTE refs to manage input state are ideal when the form value is only important on submit
  // const nameInputRef = useInputRef();
  // NOTE stateful values are ideal when the value is important on every change
  // * Like when validating on every keystroke
  // const [name, setName] = useState('');

  const {
    value: name,
    blurHandler: nameBlurHandler,
    changeHandler: nameChangeHandler,
    isValid: nameIsValid,
    hasError: nameHasError,
    touch: nameTouch,
    reset: nameReset,
  } = useInput((x: string) => x.trim() !== '');

  const {
    value: email,
    blurHandler: emailBlurHandler,
    changeHandler: emailChangeHandler,
    isValid: emailIsValid,
    hasError: emailHasError,
    touch: emailTouch,
    reset: emailReset,
  } = useInput((x: string) => x.includes('@'));

  // NOTE validation on every keystroke strategy, best UX since it provides instant feedback
  // const nameIsValid = name.trim() !== '';
  // const nameInputInvalid = !nameIsValid && nameTouched;

  const formIsValid = nameIsValid && emailIsValid;

  // NOTE since no side effects are needed, form validity checks can be constant assignments which is also more performant
  // useEffect(() => {
  //   setFormIsValid(nameIsValid);
  // }, [nameIsValid]);

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    touchAllInputs();

    // NOTE validation only on submit strategy, can provide frustrating UX (User Experience)
    // if (!name.trim()) {
    //   setNameIsValid(false);
    //   return;
    // }

    if (!formIsValid) return;

    resetInputs();
  };

  const resetInputs = () => {
    nameReset();
    emailReset();
  };

  const touchAllInputs = (touch = true) => {
    nameTouch(touch);
    emailTouch(touch);
  };

  // const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //    setName(value);
  //    NOTE validation on every keystroke strategy, best UX since it provides instant feedback
  //    setNameIsValid(!!value.trim());
  // };
  // const nameInputBlurHandler = () => {
  //   setNameTouched(true);
  //    NOTE validation on blur strategy, good UX but not ideal for complex forms
  //    setNameIsValid(!!name.trim());
  // };

  const nameInputClasses = nameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className="error-text">Name invalid!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Email invalid!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export { SimpleInput };
