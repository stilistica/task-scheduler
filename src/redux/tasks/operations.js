import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/tasks');
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const addTask = createAsyncThunk('tasks/addTask', async (body, thunkAPI) => {
    try {
        const response = await axios.post('/tasks', body);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const deleteTask = createAsyncThunk(
    'tasks/addTask',
    async (taskId, thunkAPI) => {
        try {
            await axios.delete(`/tasks/${taskId}`);
            return taskId;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);