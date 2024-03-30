import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
    reducer: combineReducers({
        auth: authSlice.reducer,
        user: userSlice.reducer,
    }),
    devTools: true, // à mettre en false pour la production
});
