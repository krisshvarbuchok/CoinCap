import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./slice/listSlice";
import infoCoinSlice from "./slice/infoCoinSlice";

const store = configureStore({
    reducer:{
        list: listSlice,
        coin: infoCoinSlice,
    }
})
export default store;