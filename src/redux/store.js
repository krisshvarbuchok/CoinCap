import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./slice/listSlice";
import infoCoinSlice from "./slice/infoCoinSlice";
import diagramSlice from "./slice/diagramSlice";

const store = configureStore({
    reducer:{
        list: listSlice,
        coin: infoCoinSlice,
        diagram: diagramSlice,
    }
})
export default store;