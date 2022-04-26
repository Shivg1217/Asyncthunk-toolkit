import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from './../services/index';

const initialState = { users: [], status: null }

const usersSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.status = "loading"
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = "success"
            state.users = action.payload
        },
        [getUsers.rejected]: (state) => {
            state.status = "failed"
        }
    }
})

export default usersSlice.reducer;