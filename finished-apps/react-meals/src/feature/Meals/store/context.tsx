import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { initialState, MealAction, mealReducer, MealState } from './reducer';

interface MealContextProps {
  mealState: MealState;
  mealDispatch: Dispatch<MealAction>;
}

interface MealContextProviderProps {
  children: ReactNode;
}

const MealContext = createContext<MealContextProps>({
  mealState: {} as any,
  mealDispatch: () => {},
});

const MealContextProvider = ({ children }: MealContextProviderProps) => {
  const [mealState, mealDispatch] = useReducer(mealReducer, initialState);

  return (
    <MealContext.Provider value={{ mealState, mealDispatch }}>
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
export { MealContextProvider };
