import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchGetСryptocurrency = createAsyncThunk(
  "list/fetchGetСryptocurrency",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/v2/assets`,
        {
          method: 'GET', 
          headers: {
            'Accept-Encoding': 'deflate',
            'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      if (!Array.isArray(result.data)) {
        // Проверка структуры данных
        throw new Error("Invalid data format from the server.");
      }
      return result.data;
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

const listSlice = createSlice({
  name: "list",
  initialState: {
    data: [],
    info: [],
    popular: [],
    statusData: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetСryptocurrency.pending, (state, action) => {
        state.statusData = "loading";
      })
      .addCase(fetchGetСryptocurrency.fulfilled, (state, action) => {
        state.statusData = "successed";
        //state.error = null;
        state.data = action.payload;
        state.popular = action.payload.filter(
          (item) => item.rank === "1" || item.rank === "2" || item.rank === "3"
        );
      })
      .addCase(fetchGetСryptocurrency.rejected, (state, action) => {
        state.statusData = "failed";
        state.error = action.payload;
      });
  },
});
export { fetchGetСryptocurrency };
export default listSlice.reducer;
