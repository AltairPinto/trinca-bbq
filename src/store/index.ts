import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from 'ducks/authSlice';
import bbqReducer from 'ducks/bbqSlice';
import toast from 'react-hot-toast';

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('bbqState', serializedState);
  } catch (error) {
    toast.error('Could not save state', error);
  }
};

const loadStateFromLocalStorage = () => {
  if (typeof window === 'undefined') {
    return undefined;
  }
  try {
    const serializedState = localStorage.getItem('bbqState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    toast.error('Could not load state', error);
    return undefined;
  }
};

const preloadedState = loadStateFromLocalStorage();

const rootReducer = combineReducers({
  auth: authReducer,
  bbq: bbqReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
