import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

interface AuthState {
  loggedIn: boolean;
  user: User | null;
}

interface User {
  id: number;
  name: string;
}

const initialState: AuthState = {
  loggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.loggedIn = true;
      state.user = action.payload;
      toast.success(`Bem-vindo, ${action.payload.name}!`);
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
