import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  nombre: 'marco',
  value: 0,
  allProducts: [],
  jsonserverProducts: []
}


const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    saveproducts: (state, action) => {
      state.allProducts = action.payload
    },
    saveJsonServerProducts: (state, action) => {
      state.jsonserverProducts = action.payload
    }
  },
});

export const { increment, decrement, incrementByAmount, saveproducts, saveJsonServerProducts} = counterSlice.actions;

export default counterSlice.reducer;
