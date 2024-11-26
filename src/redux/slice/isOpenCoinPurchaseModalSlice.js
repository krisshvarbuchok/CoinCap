import { createSlice } from "@reduxjs/toolkit";

const isOpenCoinPurchaseModalSlice = createSlice({
    name: 'modalCoin',
    initialState: false,
    reducers: {
        setIsOpenCoinPurchase: (state, action) => {
            return state = action.payload;
        }
    }
})
export const {setIsOpenCoinPurchase} = isOpenCoinPurchaseModalSlice.actions;
export default isOpenCoinPurchaseModalSlice.reducer;