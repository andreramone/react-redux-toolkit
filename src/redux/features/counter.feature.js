import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

let counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // aqui são as actions do redux
    // actions são objetos que contem seu comando
    //  os dados serão passados através do action.payload
    increment: function (state, action) {
      state.count = state.count + 1;
    },
    decrement: function (state, action) {
      state.count = state.count - 1;
    },
    incrementBy: function (state, action) {
      state.count = state.count + action.payload;
    },
  },
});
export const { increment, decrement, incrementBy } = counterSlice.actions;
export default counterSlice.reducer;
