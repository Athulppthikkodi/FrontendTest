import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  employs: [{
    id:'1',
    name: "Lionel Messi",
    leagues: ['Laliga', 'League1'],
    position: "Forward",
    status: "Active",
    height: "1.7",
    date: "1998-04-05",
    age: "26",
  },{
    id:'2',
    name: "Neymer",
    leagues: ['Laliga', 'League1', 'League2', 'League3'],
    position: "Forward",
    status: "Retired",
    height: "1.8",
    date: "1997-04-03",
    age: "27",
  },{
    id:'3',
    name: "Cristiano",
    leagues: ['Laliga', 'League1'],
    position: "Forward",
    status: "Active",
    height: "1.9",
    date: "1996-05-03",
    age: "28",
  },
  {
    id:'4',
    name: "kroos",
    leagues: ['Laliga', 'League1','League3'],
    position: "Forward",
    status: "Retired",
    height: "1.8",
    date: "1999-05-08",
    age: "25",
  },
  {
    id:'5',
    name: "Mbape",
    leagues: ['Laliga', 'League2'],
    position: "Forward",
    status: "Active",
    height: "1.9",
    date: "2000-05-03",
    age: "24",
  },
  {
    id:'6',
    name: "san",
    leagues: ['Laliga', 'League1', 'League2', 'League3'],
    position: "Backward",
    status: "Retired",
    height: "1.8",
    date: "1997-05-03",
    age: "27",
  },
  {
    id:'7',
    name: "Sidh",
    leagues: ['Laliga', 'League1'],
    position: "Forward",
    status: "Retired",
    height: "1.7",
    date: "1998-05-03",
    age: "26",
  },
  {
    id:'8',
    name: "murali",
    leagues: ['Laliga', 'League1', 'League2', 'League3'],
    position: "Forward",
    status: "Active",
    height: "1.9",
    date: "1992-05-03",
    age: "32",
  },
  {
    id:'9',
    name: "Varun",
    leagues: ['Laliga', 'League2'],
    position: "Forward",
    status: "Active",
    height: "1.9",
    date: "2000-05-03",
    age: "24",
  },
],
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
