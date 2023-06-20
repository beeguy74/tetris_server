import { configureStore } from '@reduxjs/toolkit';
import loginFormReducer from '../components/slices/loginFormSlice';
import inputLoginReducer from '../components/slices/inputLoginSlice';
import homePageReducer from '../components/slices/homePageSlice';
import whichGameReducer from '../components/slices/whichGameSlice';

export const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    inputLogin: inputLoginReducer,
    homePage: homePageReducer,
    whichGame: whichGameReducer,
  },
});
