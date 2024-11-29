import { createSlice } from "@reduxjs/toolkit";


const sumCaseSlice = createSlice({
    name: 'sumCase',
    initialState: {
        sum: 0,
    },
    reducers: {
        addSum: (state, action) => {
            state.sum = state.sum + +action.payload;
        },
        deleteSum:(state, action) => {
            state.sum = state.sum - action.payload;
        }
    }
})
export const {addSum, deleteSum} = sumCaseSlice.actions;
export default sumCaseSlice.reducer;