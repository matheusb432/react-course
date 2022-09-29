import { useContext } from 'react';
import AuthContext from '../store/auth-context';

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
