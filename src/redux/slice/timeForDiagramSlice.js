import { createSlice } from "@reduxjs/toolkit";

const timeForDiagramSlice = createSlice({
    name: 'time',
    initialState: false,
    reducers: {
        setTime: (state, action)=>{
            return state = action.payload
        }
    }
})
export const {setTime} = timeForDiagramSlice.actions;
export default timeForDiagramSlice.reducer;