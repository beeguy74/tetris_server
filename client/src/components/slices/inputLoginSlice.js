import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../../socket";

const initialState = {
  input: "",
};

export const inputLoginSlice = createSlice({
  name: "inputLogin",
  initialState,
  reducers: {
    inputLogin: (state, action) => {
      state.input = action.payload;
    },
    sendLogin: (state) => {
      const name = state.input;
      // debugger;
      state.input = "";
      socket.emit("login", name);
    },
  },
});

export const { inputLogin, sendLogin } = inputLoginSlice.actions;
export default inputLoginSlice.reducer;
