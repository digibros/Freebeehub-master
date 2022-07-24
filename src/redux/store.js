import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import localStorage from "redux-persist/es/storage";
import AllReducer from ".";
const persistConfig = {
  key: "root",
  storage: localStorage,
};
const persistedReducer = persistReducer(persistConfig, AllReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistedStore = persistStore(store);
