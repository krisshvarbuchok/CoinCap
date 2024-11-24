import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchGetStatistic = createAsyncThunk('statistic/fetchGetStatistic', async (id) => {
    try {
        const response = await fetch(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`);
        const result = await response.json();
        //console.log(result.data);
        
        const dateAndPrice = result.data.map(item => ({
            date: new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
            price: +parseFloat(item.priceUsd).toFixed(2),
            time: item.time,
        }))
        //console.log(dateAndPrice);
        
        return dateAndPrice;
    }
    catch (err) {
        console.log(err.name, err.message);
    }
})


const diagramSlice = createSlice({
    name: 'diagram',
    initialState: {
        statistic:[],
        status: null,

    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchGetStatistic.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchGetStatistic.fulfilled, (state, action) => {
                state.status = 'successed';
                state.statistic = action.payload;
            })
    }
})
export {fetchGetStatistic};
export default diagramSlice.reducer;