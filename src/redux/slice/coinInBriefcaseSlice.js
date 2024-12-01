import { createSlice } from "@reduxjs/toolkit";
import getCoinsFromCaseLocal from "../../localStorage/getCoinsFromCase";
import updateCoinsInLocal from "../../localStorage/updateCoins";

const coinInBriefcaseSlice = createSlice({
    name: 'coinInBriefcase',
    initialState: {
        myCoins: [...getCoinsFromCaseLocal()],
        statusMyCoins: 'successed',
    },
    reducers: {
        addCoinInCase: (state, action) => {
            if (!state.myCoins.some(item => item.id === action.payload.id)) {
                state.myCoins.push(action.payload);
            } else {
                //нужно приплюсовать
                state.myCoins.forEach(item => {
                    if (item.id === action.payload.id) {
                        item.count = item.count + action.payload.count;
                        item.priceUSD =  action.payload.priceUSD;
                        //обновится стоимость всех новых и старых коинов
                    }
                })
            }
            updateCoinsInLocal(state.myCoins);
            state.statusMyCoins = true;
        },
        removeMyCoinCase: (state, action) => {
            state.myCoins = state.myCoins.filter(item => item.id !== action.payload);
            updateCoinsInLocal(state.myCoins);
            state.statusMyCoins = 'successed';
        },
        setStatusMyCoins: (state, action) =>{
            state.statusMyCoins = false;
        }
    }
})
export const { addCoinInCase, removeMyCoinCase, setStatusMyCoins } = coinInBriefcaseSlice.actions;
export default coinInBriefcaseSlice.reducer;