import { createSlice } from "@reduxjs/toolkit";
import getCoinsFromCaseLocal from "../../localStorage/getCoinsFromCase";
import updateCoinsInLocal from "../../localStorage/updateCoins";

const coinInBriefcaseSlice = createSlice({
    name: 'coinInBriefcase',
    initialState: {
        myCoins: [...getCoinsFromCaseLocal()],
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
            updateCoinsInLocal(state.myCoins);
        },
        removeMyCoinCase: (state, action) => {
            state.myCoins = state.myCoins.filter(item => item.id !== action.payload);
            updateCoinsInLocal(state.myCoins);
        }
    }
})
export const { addCoinInCase, removeMyCoinCase } = coinInBriefcaseSlice.actions;
export default coinInBriefcaseSlice.reducer;