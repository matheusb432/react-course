import { useContext } from 'react';
import AuthContext from '../store/auth-context';

// NOTE simple hook to facilitate auth context instance access
const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
