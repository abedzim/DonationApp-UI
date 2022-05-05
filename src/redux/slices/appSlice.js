import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: "light",
    onBoardingSeen: false,
  },
  reducers: {
    setOnBoardingSeen: (state, action) => {
      state.onBoardingSeen = action.payload;
    },
    resetApp: (state, action) => {
      state.theme = "light";
      state.onBoardingSeen = false;
    },
  },
});

export default appSlice.reducer;

export const { resetApp, setOnBoardingSeen } = appSlice.actions;
