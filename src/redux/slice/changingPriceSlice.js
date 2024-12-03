import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toFixNumber from "../../utils/toFixNumber";

const fetchGetChangingPrice = createAsyncThunk(
  "changingPrice/fetchGetChangingPrice",
  async (coin, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/v2/assets/${coin.id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return { coin: result.data, count: coin.count };
    } catch (err) {
        console.log("Error details:", {
            name: err.name,
            message: err.message,
            stack: err.stack,
          });
          // Возвращаем ошибку с нужной информацией для rejectWithValue
          return rejectWithValue({
            name: err.name || 'FetchError', // Применение значения по умолчанию, если его нет
            message: err.message || 'An unexpected error occurred',
            stack: err.stack || 'No stack trace available',
          });
    }
  }
);

const changingPriceSlice = createSlice({
  name: "changingPrice",
  initialState: {
    sumChanged: 0,
    statusRefresh: null,
    newCoins: [],
  },
  reducers: {
    refreshNewCoins: (state, action) => { 
      state.newCoins = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetChangingPrice.pending, (state, action) => {
        state.statusRefresh = "loading";
      })
      .addCase(fetchGetChangingPrice.fulfilled, (state, action) => {
        const { coin, count } = action.payload;
        if (state.newCoins.find((item) => item.id === coin.id)) {
          state.newCoins = state.newCoins.map((item) =>
            item.id === coin.id
              ? { ...item, priceUsd: coin.priceUsd, count: count }
              : item
          );
        } else {
          state.newCoins.push({ ...coin, count: count });
        }
        state.sumChanged = state.newCoins
          .reduce((acc, item) => acc + +toFixNumber(item.priceUsd) * item.count, 0)
          .toFixed(2);
        state.statusRefresh = "successed";
      })
      .addCase(fetchGetChangingPrice.rejected, (state, action) => {
        state.statusRefresh = 'failed';
      })
  },
});
export { fetchGetChangingPrice };
export const { refreshNewCoins } = changingPriceSlice.actions;
export default changingPriceSlice.reducer;
