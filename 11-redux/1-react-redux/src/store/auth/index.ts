import { emptyUser } from '../../types/user';

import { User } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSlices } from '../types';
import { useAuthDispatch } from './types';

interface AuthState {
  isLoggedIn: boolean;
  user: User;
}

const initialAuthState: AuthState = {
  isLoggedIn: false,
  user: emptyUser,
};

const authSlice = createSlice({
  name: StateSlices.Auth,
  initialState: initialAuthState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = emptyUser;
    },
  },
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { initialAuthState, authReducer, authActions, useAuthDispatch };
export type { AuthState };
