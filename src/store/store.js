import { configureStore } from '@reduxjs/toolkit'
import { togglerSlice } from '../redux/sideSlice'
import { authApi } from '../redux/api/authApi'
import authSlice from '../redux/authSlice'
import dataInfo from "../redux/dataInfo";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    side: togglerSlice.reducer,
    authSlice: authSlice,
    dataInfo: dataInfo
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware),
})