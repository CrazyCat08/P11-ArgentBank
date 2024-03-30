import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const USER_URL = "http://localhost:3001/api/v1/user";

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        const response = await fetch(`${USER_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        if (response.ok) {
            try {
                const data = await response.json();
                localStorage.setItem("token", JSON.stringify(data.body.token));
                return data;
            } catch (error) {
                return rejectWithValue(error.message);
            }
        } else {
            const err = await response.json();
            console.log(err.message);
            return rejectWithValue(err.message);
        }
    },
);

export const authSlice = createSlice({
    name: "auth",

    initialState: {
        status: "void",
        isConnected: false,
        token: localStorage.getItem("token")
            ? JSON.parse(localStorage.getItem("token"))
            : null,
        error: null,
    },

    reducers: {
        logout: (state) => {
            state.status = "void";
            state.isConnected = false;
            localStorage.removeItem("token");
            state.token = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = "pending";
                state.token = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.isConnected = true;
                state.token = JSON.parse(localStorage.getItem("token"));
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
