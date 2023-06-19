import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    openForm: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const {openForm} = loginFormSlice.actions;
export default loginFormSlice.reducer;