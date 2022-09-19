import { Meal } from '../types';
import { MealActions } from './types';

interface MealAction {
  type: MealActions;
  payload: Meal | Meal[];
}

interface MealState {
  meals: Meal[];
}

const initialState: MealState = {
  meals: [],
};

const mealReducer = (state: MealState, action: MealAction): MealState => {
  const { type, payload } = action;
  const { meals } = state;

  switch (type) {
    case MealActions.SetMeals:
      if (!Array.isArray(payload)) return state;

      return {
        ...state,
        meals: payload,
      };

    case MealActions.AddMeal:
      if (Array.isArray(payload)) return state;

      return {
        ...state,
        meals: [...meals, payload],
      };

    case MealActions.UpdateMeal:
      if (Array.isArray(payload)) return state;

      const mealIndex = meals.findIndex((m) => m.id === payload.id);
      const updatedMeals = [...meals];
      updatedMeals[mealIndex] = payload;
      return {
        ...state,
        meals: updatedMeals,
      };

    case MealActions.DeleteMeal:
      if (Array.isArray(payload)) return state;

      return {
        ...state,
        meals: meals.filter((m) => m.id !== payload.id),
      };

    default:
      return state;
  }
};

export { mealReducer, initialState };
export type { MealState, MealAction };
