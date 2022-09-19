import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { useHttp, UseHttpOptions } from '../../../hooks';
import { FirebaseResponse } from '../../../types';
import { mapFirebaseResponse } from '../../../utils';
import { Meal } from '../types';
import { initialState, MealAction, mealReducer, MealState } from './reducer';
import { MealActions } from './types';

interface MealContextProps {
  mealState: MealState;
  mealDispatch: Dispatch<MealAction>;
  isLoadingMeals: boolean | undefined;
  errorMeals: string | null;
  fetchMeals: (options?: UseHttpOptions) => Promise<void>;
}

interface MealContextProviderProps {
  children: ReactNode;
}

const MealContext = createContext<MealContextProps>({
  mealState: {} as any,
  mealDispatch: () => {},
  isLoadingMeals: false,
  errorMeals: null,
  fetchMeals: () => Promise.resolve(),
});

const MealContextProvider = ({ children }: MealContextProviderProps) => {
  const [mealState, mealDispatch] = useReducer(mealReducer, initialState);
  const {
    isLoading: isLoadingMeals,
    error: errorMeals,
    get: fetchMeals,
  } = useHttp();

  const handleFetchMeals = useCallback((data: FirebaseResponse<Meal>) => {
    mealDispatch({
      type: MealActions.SetMeals,
      payload: mapFirebaseResponse(data),
    });
  }, []);

  const fetchMealsOptions = useMemo(
    () => ({
      url: '/meals.json',
      handleData: handleFetchMeals,
    }),
    [handleFetchMeals]
  );

  useEffect(() => {
    fetchMeals(fetchMealsOptions);
  }, [fetchMeals, fetchMealsOptions]);

  return (
    <MealContext.Provider
      value={{
        mealState,
        mealDispatch,
        isLoadingMeals,
        errorMeals,
        fetchMeals: (options?: UseHttpOptions) => fetchMeals(fetchMealsOptions),
      }}>
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
export { MealContextProvider };
