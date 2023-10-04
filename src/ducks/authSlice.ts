import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

interface AuthState {
  loggedIn: boolean;
  user: User | null;
  error: string | null;
}

interface User {
  id: number;
  name: string;
}

const initialState: AuthState = {
  loggedIn: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.loggedIn = true;
      state.user = action.payload;
      state.error = null;
      toast.success(`Bem-vindo, ${action.payload.name}!`);
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.loggedIn = false;
      state.user = null;
      state.error = action.payload;
      toast.error(action.payload);
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailed, logout } = authSlice.actions;

export default authSlice.reducer;
