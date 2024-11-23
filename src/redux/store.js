import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./slice/listSlice";

const store = configureStore({
    reducer:{
        list: listSlice,
    }
})
export default store;