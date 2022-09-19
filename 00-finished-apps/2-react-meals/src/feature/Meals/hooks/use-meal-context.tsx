import { useContext } from 'react';
import MealContext from '../store/context';

const useMealContext = () => useContext(MealContext);

export { useMealContext };
