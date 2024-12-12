import { configureStore } from "@reduxjs/toolkit";
import employSlice from './employSlice'
const store = configureStore({
    reducer:{
        employ:employSlice
    }
})
export default store;