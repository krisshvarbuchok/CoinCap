import { createSlice } from "@reduxjs/toolkit";
import sumCoinLocal from "../../localStorage/sumCoin";
import addSumCoinsLocal from "../../localStorage/addSumCoins";


const sumCaseSlice = createSlice({
    name: 'sumCase',
    initialState: {
        sum: sumCoinLocal(),
    },
    reducers: {
        addSum: (state, action) => {
            state.sum = (+state.sum + +action.payload).toFixed(2);
            addSumCoinsLocal(state.sum);
        },
        deleteSum:(state, action) => {
            state.sum = (state.sum - +action.payload).toFixed(2);
            addSumCoinsLocal(state.sum);
        }
    }
})
export const {addSum, deleteSum} = sumCaseSlice.actions;
export default sumCaseSlice.reducer;