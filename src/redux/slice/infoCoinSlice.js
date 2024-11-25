import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchGetMoreInfo = createAsyncThunk('info/fetchGetMoreInfo', async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/v2/assets/${id}`);
        const result = await response.json();
        console.log('infocoin', result.data);
        return result.data;
    }
    catch(err){
        console.log(err.name, err.message)
    }
})



const infoCoinSlice = createSlice({
    name: 'infoCoin',
    initialState: {
        coin: {},
        status: null,
    },
    reducers: {
        removeInfoCoin: (state, action) => {
            state.coin = {};
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchGetMoreInfo.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchGetMoreInfo.fulfilled, (state, action) => {
                state.status = 'successed';
                state.coin = action.payload;
            })

    }
})
export {fetchGetMoreInfo};
export const {removeInfoCoin} = infoCoinSlice.actions;
export default infoCoinSlice.reducer;