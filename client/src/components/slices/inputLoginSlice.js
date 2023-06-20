import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
};

export const inputLoginSlice = createSlice({
  name: 'inputLogin',
  initialState,
  reducers: {
    inputLogin: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { inputLogin } = inputLoginSlice.actions;
export default inputLoginSlice.reducer;
