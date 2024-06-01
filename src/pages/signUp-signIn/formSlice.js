import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.form = action.payload;
    },
  },
});

const { reducer, actions } = formSlice;
//actions is functions inside reducers
export const { setForm } = actions;
//reducer is the value: maybe initial
export default reducer;
