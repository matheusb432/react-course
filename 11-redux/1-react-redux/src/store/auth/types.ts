import { useDispatch } from 'react-redux';
import store from '..';

// TODO Better dispatch typing? (currently any action can be dispatched via this hook)
export type AuthDispatch = typeof store.dispatch;
export const useAuthDispatch = () => useDispatch<AuthDispatch>();
