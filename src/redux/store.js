import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../api/configApi";


export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
})