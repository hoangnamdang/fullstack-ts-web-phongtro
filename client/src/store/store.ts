import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";
import { DataAuth } from "../features/auth/auth.type";
import appSlice from "../features/app/app.slice";


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
  whitelist: ['isLoggedIn', 'token']
}

export const store = configureStore({
  reducer: {
    auth: persistReducer<DataAuth>(persistConfig, authSlice),
    app: appSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
