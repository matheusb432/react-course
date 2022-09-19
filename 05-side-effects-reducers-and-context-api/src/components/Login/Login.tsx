import React, {
  ChangeEvent,
  Reducer,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.scss';
import Button from '../UI/Button/Button';
import { Actions } from '../../types/actions.enum';
import { Action } from '../../types/action';
import useAuthContext from '../../hooks/use-auth-context';
import Input, { InputForwardRef } from '../UI/Input/Input';
import useInputRef from '../../hooks/use-input-ref';

interface EmailState {
  isValid: boolean;
  value: string;
}

interface PasswordState {
  isValid: boolean;
  value: string;
}

type EmailAction = Action<string>;
type PasswordAction = Action<string>;

const emailReducer = (state: EmailState, action: EmailAction) => {
  const { value } = state;
  const { type, payload } = action;

  switch (type) {
    case Actions.UserInput:
      return { ...state, value: payload, isValid: !!payload?.includes('@') };

    case Actions.InputBlur:
      return { ...state, isValid: !!value?.includes('@') };

    default:
      return { ...state };
  }
};

const passwordReducer = (state: PasswordState, action: PasswordAction) => {
  const { value } = state;
  const { type, payload } = action;

  switch (type) {
    case Actions.UserInput:
      return { ...state, value: payload, isValid: payload!.trim().length > 6 };

    case Actions.InputBlur:
      return { ...state, isValid: value.trim().length > 6 };

    default:
      return { ...state };
  }
};

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState<boolean>();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState<boolean>();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailRef = useInputRef<InputForwardRef>();
  const passwordRef = useInputRef<InputForwardRef>();

  const { onLogin } = useAuthContext();

  // const [emailState, dispatchEmail] = useReducer<Reducer<EmailState, EmailAction>>(emailReducer, {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: false,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // NOTE useEffect to handle form validation state
  useEffect(() => {
    // NOTE basic debounce logic
    const timeout = setTimeout(() => {
      setFormIsValid(passwordIsValid && emailIsValid);
    }, 500);

    // NOTE cleanup function return
    return () => {
      clearTimeout(timeout);
    };
    // NOTE best to set only the relevant properties as dependencies instead of the entire state
  }, [passwordIsValid, emailIsValid]);

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: Actions.UserInput, payload: event.target.value });
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchPassword({ type: Actions.UserInput, payload: event.target.value });
  };

  const validateEmailHandler = () => {
    // NOTE ! can lead to bugs since enteredEmail is not dependent on the previous state
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({ type: Actions.InputBlur, payload: emailState.value });
  };

  const validatePasswordHandler = () => {
    dispatchEmail({ type: Actions.InputBlur, payload: passwordState.value });
  };

  const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formIsValid) {
      onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      // NOTE using the method exposed by Input in the useImperativeHandle hook
      emailRef.current?.activate();
    } else {
      passwordRef.current?.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          label="E-Mail"
          isInvalid={!emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          ref={emailRef}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          isInvalid={!passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          ref={passwordRef}
        />
        <div className={classes.actions}>
          {/* <Button type="submit" className={classes.btn} disabled={!formIsValid}> */}
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
