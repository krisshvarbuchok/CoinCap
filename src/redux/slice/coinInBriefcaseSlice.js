import { createSlice } from "@reduxjs/toolkit";

const coinInBriefcaseSlice = createSlice({
    name: 'coinInBriefcase',
    initialState: {
        myCoins: [],
    },
    reducers: {
        addCoinInCase: (state, action) => {
            if (!state.myCoins.some(item => item.id === action.payload.id)) {
                state.myCoins.push(action.payload);
                //нужно приплюсовать
            } else {
                state.myCoins.forEach(item => {
                    if (item.id === action.payload.id) {
                        item.count = item.count + action.payload.count;
                    }
                })
            }
        },
        removeMyCoinCase: (state, action) => {
            state.myCoins = state.myCoins.filter(item => item.id !== action.payload);
        }
    }
})
export const { addCoinInCase, removeMyCoinCase } = coinInBriefcaseSlice.actions;
export default coinInBriefcaseSlice.reducer;