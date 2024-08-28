import { createSlice, current } from "@reduxjs/toolkit";

// redux toolkit gives this syntax
// returns an object.
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // reducer function
    addItem: (state, action) => {
      // mutating the state here

      // In vanilla redux => it says Don't mutate state, returning was mandatory.
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux Toolkit
      // We have to mutate the state when using redux toolkit.
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // original State = ["pizza"]
    clearCart: (state, action) => {
      // console.log(state); // pizza
      // console.log(current(state));
      // state = [];
      // console.log(state); // []

      // RTK - either mutate the state or return a new state
      // state.items.length = 0;

      // this new [] will be replaced inside originalState = []
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
