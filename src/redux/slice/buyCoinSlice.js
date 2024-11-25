import { createSlice } from "@reduxjs/toolkit";

const buyCoinSlice = createSlice({
    name: 'buy',
    initialState: '',
    reducers: {
        setBuy: (state, action) => {
            return state = action.payload;
        },
        removeBuy: (state, action) =>{
            return state = ''
        }
    }
})
export const {setBuy, removeBuy} = buyCoinSlice.actions;
export default buyCoinSlice.reducer;