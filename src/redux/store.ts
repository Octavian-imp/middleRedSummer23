"use client";

import { configureStore } from "@reduxjs/toolkit";
import { rootApi } from "./api/rootApi";
import { FilterShipmentsReducer } from "./reducers/FilterShipments";
import { ShipmentsSeederReducer } from "./reducers/ShipmentsSeeder";
export const store = configureStore({
    reducer: {
        [rootApi.reducerPath]: rootApi.reducer,
        filterShipments: FilterShipmentsReducer,
        shipments: ShipmentsSeederReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([rootApi.middleware]),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
