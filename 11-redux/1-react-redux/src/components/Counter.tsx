import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { Dispatch } from 'redux';
import { CounterAction, CounterState } from '../store/reducer';
import { CounterActions } from '../store/types';

import classes from './Counter.module.scss';

const Counter = () => {
  // NOTE using Redux useSelector hook to get only a slice of the store.
  const counter = useSelector((state: CounterState) => state.counter);
  const showCounter = useSelector((state: CounterState) => state.showCounter);

  // NOTE getting access to the dispatch function via Redux useDispatch hook
  const dispatch = useDispatch<Dispatch<CounterAction>>();

  const incrementHandler = () => {
    // NOTE calling dispatch with an action object
    dispatch({ type: CounterActions.Increment });
  };

  const decrementHandler = () => {
    dispatch({ type: CounterActions.Decrement });
  };

  const addCounterHandler = (payload: number) => {
    dispatch({ type: CounterActions.Add, payload });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: CounterActions.Toggle });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={() => addCounterHandler(15)}>Add 15</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
