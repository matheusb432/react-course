import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { useInput } from '../hooks';
import { useAuthDispatch, authActions } from '../store/auth';
import { AppState } from '../store/types';
import { validateEmail, validateText } from '../utils/validations';
import classes from './Auth.module.scss';
import { Card } from './UI/Card';

const Auth = () => {
  const { isLoggedIn } = useSelector((state: AppState) => state.auth);
  const dispatch = useAuthDispatch();

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    touch: emailTouch,
  } = useInput(validateEmail);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    touch: passwordTouch,
  } = useInput(validateText);

  const formIsValid = emailIsValid && passwordIsValid;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    touchInputs();

    if (!formIsValid) return;

    login();
  };

  const touchInputs = () => {
    emailTouch();
    passwordTouch();
  };

  const login = () => {
    dispatch(authActions.login({ email: emailValue }));
  };

  if (isLoggedIn) return <Card>Logged In!</Card>;

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div
            className={`${classes.control} ${
              emailHasError && classes.invalid
            }`}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && <p className="error-text">Email is invalid!</p>}
          </div>
          <div
            className={`${classes.control} ${
              passwordHasError && classes.invalid
            }`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className="error-text">Password is invalid!</p>
            )}
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
