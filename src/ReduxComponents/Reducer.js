import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  data: []
};
export const customReducer = createReducer(initialState, {
  AddToStore: (state, action) => {
    state.data = action.payload;
  }
});
