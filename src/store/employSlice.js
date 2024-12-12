import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  employs: [],
};
const employSlice = createSlice({
  name: "employ",
  initialState,
  reducers: {
    addEmploy(state, action) {
      state.employs.push(action.payload);
    },
    deleteEmploy(state, action) {
      const data = state.employs.filter(
        (employ) => employ.id !== action.payload
      );
      state.employs = data;
    },
    updateEmploy(state, action){
      const newData = action.payload
      let currentData = state.employs.findIndex((currentvalue=> currentvalue.id === newData.id));
       state.employs[currentData] = newData
    }
  },
});
export const empolyAction = employSlice.actions;
export default employSlice.reducer;
