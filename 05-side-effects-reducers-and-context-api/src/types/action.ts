import { Actions } from './actions.enum';

export interface Action<T> {
  type: Actions;
  payload: T;
}
