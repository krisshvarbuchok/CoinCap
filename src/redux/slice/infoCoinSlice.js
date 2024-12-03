import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchGetMoreInfo = createAsyncThunk('info/fetchGetMoreInfo', async (id,{rejectWithValue}) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/v2/assets/${id}`,
            {
                method: 'GET',
                headers: {
                  'Accept-Encoding': 'deflate',
                  'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
              }
        );
        if (!response.ok) {
            // Обработка HTTP-ошибок
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        //console.log('infocoin', result.data);
        return result.data;
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



const infoCoinSlice = createSlice({
    name: 'infoCoin',
    initialState: {
        coin: {},
        status: null,
        isComeBack: false,
        errorCoin: null,
    },
    reducers: {
        removeInfoCoin: (state, action) => {
            state.coin = {};
        },
        removeInfoCoinFromComeBack: (state, action) => {
            state.isComeBack = true;
        },
        setIsComeBackFalse: (state, action) => {
            state.isComeBack = false;
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
            .addCase(fetchGetMoreInfo.rejected, (state, action) => {
                console.log('chf,jnfkj');
                
                state.status = 'failed';
                state.errorCoin = action.payload;
            })
    }
})
export { fetchGetMoreInfo };
export const { removeInfoCoin, removeInfoCoinFromComeBack, setIsComeBackFalse } = infoCoinSlice.actions;
export default infoCoinSlice.reducer;