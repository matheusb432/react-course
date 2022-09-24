import { useSelector } from 'react-redux';
import { counterActions } from '../store';
import { AppState } from '../store/reducer';
import { useCounterDispatch } from '../store/types';

import classes from './Counter.module.scss';
import { Card } from './UI/Card';

const Counter = () => {
  // NOTE [Redux] useSelector hook to get only a slice of the store, in this case the counter state
  const { counter, showCounter } = useSelector(
    (state: AppState) => state.counter
  );
  // const showCounter = useSelector((state: AppState) => state.showCounter);

  // NOTE [Redux] getting access to the dispatch function via Redux useDispatch hook
  // const dispatch = useDispatch<Dispatch<CounterAction>>();
  // NOTE [Redux Toolkit] Getting the typed dispatch function via the useCounterDispatch custom hook
  const dispatch = useCounterDispatch();

  const incrementHandler = () => {
    // NOTE [Redux] calling dispatch with an action object
    // dispatch({ type: CounterActions.Increment });
    // NOTE [Redux Toolkit] calling dispatch with the action creator
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const addCounterHandler = (payload: number) => {
    // NOTE [Redux Toolkit] will be equivalent to dispatch({ type: CounterActions.Add, payload })
    dispatch(counterActions.add(payload));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <Card>
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
    </Card>
  );
};

export default Counter;
