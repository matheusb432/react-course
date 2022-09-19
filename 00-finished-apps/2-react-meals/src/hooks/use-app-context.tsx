import { useContext } from 'react';
import { AppContext } from '../store/app-context';

const useAppContext = () => useContext(AppContext);

export { useAppContext };
