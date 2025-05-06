import {createSlice} from "@reduxjs/toolkit";
import {logIn, logOut, refreshUser, register} from './operations.js'
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,

        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = {name: null, email: null};
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            })


            // .addMatcher(isAnyOf(register.rejected, logIn.rejected, logOut.rejected, refreshUser.rejected), (state, action) => {
            //     state.error = action.payload;
            // })
            // .addMatcher(isAnyOf(register.pending, logIn.pending, logOut.pending, refreshUser.pending), (state) => {
            //     state.error = null;
            //     state.isLoading = true;
            // })
            // .addMatcher(isAnyOf(register.fulfilled, logIn.fulfilled, logOut.fulfilled, refreshUser.fulfilled), (state) => {
            //     state.isLoading = false;
            // })
    }
});

export const authReducer = authSlice.reducer;