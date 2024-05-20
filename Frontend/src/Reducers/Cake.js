import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    value: {
      id: "",
      cakename: "",
      image: "",
      price: "",
      description: "",
      category: ""
    }
  },
  reducers: {
    getCakeData: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { getCakeData } = cakeSlice.actions;

export default cakeSlice.reducer;
