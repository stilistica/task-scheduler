import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {addTask, deleteTask, fetchTasks} from "./operations.js";
import {logOut} from "../auth/operations.js";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
                state.error = null;
                state.isLoading = false;
            })

            .addMatcher(isAnyOf(fetchTasks.pending, addTask.pending, deleteTask.pending), (state) => {
                state.isLoading = true;
            })
            .addMatcher(isAnyOf(fetchTasks.rejected, addTask.rejected, deleteTask.rejected), (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // .addMatcher(isAnyOf(fetchTasks.fulfilled, addTask.fulfilled, deleteTask.fulfilled), (state) => {
            //     state.isLoading = false;
            //     state.error = null;
            // })
    }
})

export const tasksReducer = tasksSlice.reducer;