import { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CounterActions, CounterAction, CounterState } from '../store/counter';

import classes from './Counter.module.scss';

// NOTE using Redux on class components
class CounterClass extends Component<any> {
  incrementHandler = () => {
    this.props.increment();
  };

  decrementHandler = () => {
    this.props.decrement();
  };

  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={() => this.incrementHandler()}>Increment</button>
          <button onClick={() => this.decrementHandler()}>Decrement</button>
        </div>
        <button onClick={() => this.toggleCounterHandler()}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

const mapStateToProps = (state: CounterState) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => {
  return {
    increment: () => dispatch({ type: CounterActions.Increment }),
    decrement: () => dispatch({ type: CounterActions.Decrement }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
