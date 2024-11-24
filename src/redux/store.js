import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./slice/listSlice";
import infoCoinSlice from "./slice/infoCoinSlice";
import diagramSlice from "./slice/diagramSlice";
import timeForDiagramSlice from "./slice/timeForDiagramSlice";

const store = configureStore({
    reducer:{
        list: listSlice,
        coin: infoCoinSlice,
        diagram: diagramSlice,
        time: timeForDiagramSlice,
    }
})
export default store;