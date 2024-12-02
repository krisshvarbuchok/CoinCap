import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchGetStatistic = createAsyncThunk('statistic/fetchGetStatistic', async (id, {rejectWithValue}) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/v2/assets/${id}/history?interval=d1`);
        if (!response.ok) {
            // Обработка HTTP-ошибок
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        if (!Array.isArray(result.data)) {
            // Проверка структуры данных
            throw new Error("Invalid data format from the server.");
        }
        const dateAndPrice = result.data.map(item => ({
            date: new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
            price: +parseFloat(item.priceUsd).toFixed(2),
            time: item.time,
        }))
        return dateAndPrice;
    }
    catch (err) {
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
})


const diagramSlice = createSlice({
    name: 'diagram',
    initialState: {
        statistic:[],
        statusDiagram: null,
        errorDiagram: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchGetStatistic.fulfilled, (state, action) => {
                state.statusDiagram = 'successed';
                //state.errorDiagram = null;
                state.statistic = action.payload;
            })
            .addCase(fetchGetStatistic.rejected, (state, action) => {
                state.statusDiagram = 'failed';
                state.errorDiagram = action.payload; 
            })
    }
})
export {fetchGetStatistic};
export default diagramSlice.reducer;