import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (dispatch, getState) => {
        return await fetch("https://jsonplaceholder.typicode.com/users").then(
            (response) => response.json()
        );
    }
)