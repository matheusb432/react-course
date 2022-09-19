import { SyntheticEvent } from 'react';
import { useInput } from '../hooks';
import { validateEmail, validateText } from '../util';

// * Challenge implementation, cleaned up some stuff from the original implementation
const BasicForm = () => {
  const {
    value: firstName,
    blurHandler: firstNameBlurHandler,
    changeHandler: firstNameChangeHandler,
    isValid: firstNameValid,
    hasError: firstNameHasError,
    reset: firstNameReset,
    touch: firstNameTouch,
    validityParagraph: firstNameValidityParagraph,
  } = useInput(validateText);

  const {
    value: lastName,
    blurHandler: lastNameBlurHandler,
    changeHandler: lastNameChangeHandler,
    isValid: lastNameValid,
    hasError: lastNameHasError,
    reset: lastNameReset,
    touch: lastNameTouch,
    validityParagraph: lastNameValidityParagraph,
  } = useInput(validateText);

  const {
    value: email,
    blurHandler: emailBlurHandler,
    changeHandler: emailChangeHandler,
    isValid: emailValid,
    hasError: emailHasError,
    reset: emailReset,
    touch: emailTouch,
    validityParagraph: emailValidityParagraph,
  } = useInput(validateEmail);

  const formValid = firstNameValid && lastNameValid && emailValid;

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    touchInputs();

    if (!formValid) return;

    resetInputs();
  };

  const touchInputs = () => {
    firstNameTouch();
    lastNameTouch();
    emailTouch();
  };

  const resetInputs = () => {
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameClasses = `form-control ${firstNameHasError ? 'invalid' : ''}`;
  const lastNameClasses = `form-control ${lastNameHasError ? 'invalid' : ''}`;
  const emailClasses = `form-control ${emailHasError ? 'invalid' : ''}`;

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameValidityParagraph('Please enter a valid first name')}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameValidityParagraph('Please enter a valid last name')}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="emailAddress">E-Mail Address</label>
        <input
          type="text"
          id="emailAddress"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailValidityParagraph('Please enter a valid email')}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export { BasicForm };
