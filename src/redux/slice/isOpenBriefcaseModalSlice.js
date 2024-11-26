import { createSlice } from "@reduxjs/toolkit";

const isOpenBriefcaseModalSlice = createSlice({
    name: 'modalBriefcase',
    initialState: false,
    reducers: {
        setIsOpenBriefcase: (state, action) => {
            return state = action.payload;
        }
    }
})
export const {setIsOpenBriefcase} = isOpenBriefcaseModalSlice.actions;
export default isOpenBriefcaseModalSlice.reducer;