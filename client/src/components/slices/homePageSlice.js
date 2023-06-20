import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    openHomePage: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { openHomePage } = homePageSlice.actions;
export default homePageSlice.reducer;
