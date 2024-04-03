import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const USER_URL = "http://localhost:3001/api/v1/user";

export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async ({ token }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${USER_URL}/profile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                return data;
            }
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    },
);

export const userNameUpdate = createAsyncThunk(
    "user/userNameUpdate",
    async ({ token, userName }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${USER_URL}/profile`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    userName: userName,
                }),
            });
            const data = await response.json();
            console.log("User name succesfully updated : ", data.body.userName);
            return data;
        } catch (error) {
            console.log("Failed to update user name");
            return rejectWithValue(error.message);
        }
    },
);

export const userSlice = createSlice({
    name: "user",

    initialState: {
        status: "void",
        userName: "",
        firstName: "",
        lastName: "",
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.userName = action.payload.body.userName;
                state.firstName = action.payload.body.firstName;
                state.lastName = action.payload.body.lastName;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.status = "rejected";
            })

            .addCase(userNameUpdate.pending, (state) => {
                state.status = "pending";
            })
            .addCase(userNameUpdate.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.error = null;
                state.userName = action.payload.body.userName;
            })
            .addCase(userNameUpdate.rejected, (state) => {
                state.status = "rejected";
            });
    },
});
