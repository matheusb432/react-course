import { createContext, ReactNode } from 'react';
import { CartContextProvider } from '../feature/Cart/store/context';
import { MealContextProvider } from '../feature/Meals/store/context';

interface AppContextProps {}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps>({});

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return (
    <AppContext.Provider value={{}}>
      <MealContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </MealContextProvider>
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
