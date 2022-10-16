import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../axios.js';

export const fetchAllUser = createAsyncThunk( 'user/fetchAllUser',async() => {
    const {data} = await axios.get('/get-all-user');
    // console.log('data redux',data)
    return data
})



const initialState = {
    data: null,
    status: 'loading',
}

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchAllUser.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAllUser.fulfilled]: (state,action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchAllUser.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
        },
    }
})

export const allUser = ((state) => state.user.data)

export const userReducer = userSlice.reducer;

export const {logout} = userSlice.actions;

