import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { useHttp } from '../../../hooks';
import { FirebaseResponse } from '../../../types';
import { mapFirebaseResponse } from '../../../utils';
import { Meal } from '../types';
import { initialState, MealAction, mealReducer, MealState } from './reducer';
import { MealActions } from './types';

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
  const { isLoading, error, request } = useHttp();

  const handleFetchMeals = useCallback((data: FirebaseResponse<Meal>) => {
    mealDispatch({
      type: MealActions.SetMeals,
      payload: mapFirebaseResponse(data),
    });
  }, []);

  const fetchMealsOptions = useMemo(
    () => ({
      method: 'GET',
      url: '/meals.json',
      handleData: handleFetchMeals,
    }),
    [handleFetchMeals]
  );

  useEffect(() => {
    request(fetchMealsOptions);
  }, [request, fetchMealsOptions]);

  return (
    <MealContext.Provider value={{ mealState, mealDispatch }}>
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
export { MealContextProvider };
