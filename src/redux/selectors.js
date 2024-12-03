import { createSelector } from '@reduxjs/toolkit'

export const selectMyBriefcase = state => state.myBriefcase;
export const selectIsOpenBriefcase = state => state.isOpenBriefcase;
export const selectIsOpenCoinPurchase = state => state.isOpenCoinPurchase;
export const selectCoin = state => state.coin;
export const selectBuy = state => state.buy;
export const selectChangingPrice = state => state.changingPrice;
export const selectList = state => state.list;
export const selectDiagram = state => state.diagram;
export const selectTime = state => state.time;

export const selectMyBriefcaseData = createSelector(
    [selectMyBriefcase],
    briefcase => ({
        myCoins: briefcase.myCoins,
        statusMyCoins: briefcase.statusMyCoins,
        sum: briefcase.sum,
    })
);
export const selectChangingPriceData = createSelector(
    [selectChangingPrice],
    changingPrice => ({
        sumChanged: changingPrice.sumChanged,
        statusRefresh: changingPrice.statusRefresh,
    })
);
export const selectListData = createSelector(
    [selectList],
    list => ({
        popular: list.popular,
        info: list.info,
        data: list.data,
        statusData: list.statusData,
        error: list.error,
    })
);
