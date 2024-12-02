import { createSlice } from "@reduxjs/toolkit";
import getCoinsFromCaseLocal from "../../localStorage/getCoinsFromCase";
import updateCoinsInLocal from "../../localStorage/updateCoins";
import sumCoinLocal from "../../localStorage/sumCoin";
import addSumCoinsLocal from "../../localStorage/addSumCoins";
import toFixNumber from "../../utils/toFixNumber";

const coinInBriefcaseSlice = createSlice({
  name: "coinInBriefcase",
  initialState: {
    myCoins: [...getCoinsFromCaseLocal()],
    sum: sumCoinLocal(),
  },
  reducers: {
    addCoinInCase: (state, action) => {
      if (!state.myCoins.some((item) => item.id === action.payload.id)) {
        state.myCoins.push(action.payload);
      } else {
        //нужно приплюсовать
        state.myCoins.forEach((item) => {
          if (item.id === action.payload.id) {
            item.count = item.count + action.payload.count;
            item.priceUsd = action.payload.priceUsd;
            //обновится стоимость всех новых и старых коинов
          }
        });
      }
      updateCoinsInLocal(state.myCoins);
      state.sum = state.myCoins
        .reduce(
          (acc, item) => acc + +toFixNumber(item.priceUsd) * item.count,
          0
        )
        .toFixed(2);
      addSumCoinsLocal(state.sum);
    },
    removeMyCoinCase: (state, action) => {
      state.myCoins = state.myCoins.filter(
        (item) => item.id !== action.payload
      );
      state.sum = state.myCoins
        .reduce(
          (acc, item) => acc + +toFixNumber(item.priceUsd) * item.count,
          0
        )
        .toFixed(2);
      updateCoinsInLocal(state.myCoins);
      addSumCoinsLocal(state.sum);
    },
  },
});
export const { addCoinInCase, removeMyCoinCase } =
  coinInBriefcaseSlice.actions;
export default coinInBriefcaseSlice.reducer;
