import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    increaseBy: (state, action) => {
      return state + Number(action.payload);
    },
    decreaseBy: (state, action) => {
      return state - Number(action.payload);
    },
  },
});

export const { increment, decrement, increaseBy, decreaseBy } = counterSlice.actions;
export default counterSlice.reducer;