import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./slice/listSlice";
import infoCoinSlice from "./slice/infoCoinSlice";
import diagramSlice from "./slice/diagramSlice";
import timeForDiagramSlice from "./slice/timeForDiagramSlice";
import buyCoinSlice from "./slice/buyCoinSlice";
import isOpenCoinPurchaseModalSlice from "./slice/isOpenCoinPurchaseModalSlice";
import isOpenBriefcaseModalSlice from "./slice/isOpenBriefcaseModalSlice";
import coinInBriefcaseSlice from "./slice/coinInBriefcaseSlice";
import changingPriceSlice from "./slice/changingPriceSlice";

const store = configureStore({
  reducer: {
    list: listSlice,
    coin: infoCoinSlice,
    diagram: diagramSlice,
    time: timeForDiagramSlice,
    buy: buyCoinSlice,
    isOpenCoinPurchase: isOpenCoinPurchaseModalSlice,
    isOpenBriefcase: isOpenBriefcaseModalSlice,
    myBriefcase: coinInBriefcaseSlice,
    changingPrice: changingPriceSlice,
  },
});
export default store;
