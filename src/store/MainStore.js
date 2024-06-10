import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { homeSlice } from "./home/homeSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        home: homeSlice.reducer,
    },
})