import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchGetСryptocurrency = createAsyncThunk('list/fetchGetСryptocurrency', async () => {
  //  try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/v2/assets`);
        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        //   }
        const data = await response.json();
        console.log(data.data)
        return data.data;
   // }
    // catch (err) {
    //     console.log(err.response.data);
    //     console.log(err.message);
    //     console.error('Error fetching cryptocurrency:', err.message);
    //     // Опционально, можно обработать ошибку Redux-Thunk
    //     throw err; // или return rejectWithValue(err.message);
    //     //return rejectWithValue(err.response?.data || 'Authorization failed');
    // }
})


const listSlice = createSlice({
    name: 'list',
    initialState: {
        data: [],
        info: [],
        popular: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchGetСryptocurrency.pending, (state, action) => {
                state.status = 'loding'
            })
            .addCase(fetchGetСryptocurrency.fulfilled, (state, action) => {
                state.status = 'successed';
                state.data = action.payload;
                state.popular = action.payload.filter(item => item.rank === '1' || item.rank === '2' || item.rank === '3')
            })
            // .addCase(fetchGetСryptocurrency.rejected, (state, action) => {
            //     state.status = 'failed';
            //     state.error = action.error;
            // })
    }
})
export { fetchGetСryptocurrency };
export default listSlice.reducer;