import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  game: '',
  mode: '',
};

export const whichGameSlice = createSlice({
  name: 'whichGame',
  initialState,
  reducers: {
    takeGame: (state, action) => {
      state.game = action.payload;
    },
    takeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { takeGame, takeMode } = whichGameSlice.actions;
export default whichGameSlice.reducer;
