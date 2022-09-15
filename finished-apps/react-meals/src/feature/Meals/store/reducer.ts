import { DUMMY_MEALS } from './../../../data/dummy-meals';
import { Meal } from '../types';
import { MealActions } from './types';

interface MealAction {
  type: MealActions;
  payload: Meal;
}

interface MealState {
  meals: Meal[];
}

const initialState: MealState = {
  meals: DUMMY_MEALS,
};

const mealReducer = (state: MealState, action: MealAction) => {
  return state;
};

export { mealReducer, initialState };
export type { MealState, MealAction };
