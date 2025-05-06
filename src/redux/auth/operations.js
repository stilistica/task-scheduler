import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://task-manager-api.goit.global/';

const setAuthHeader= (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
} // додає токен до заголовка кожного запиту

const clearAuthHeader= () => {
    axios.defaults.headers.common.Authorization = '';
} // прибирає його після виходу


export const register = createAsyncThunk('auth/register', async (body, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', body);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
}); // Після реєстрації одразу зберігає токен

export const logIn = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', body);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
}); // Після логіну зберігає токен (авторизація починається тут)

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
}); // Токен більше не надсилається, користувач "виходить".

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(persistedToken);
        const response = await axios.get('/users/me');
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});
