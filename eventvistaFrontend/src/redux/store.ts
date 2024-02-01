import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth-slice';
import globalSlice from './features/global-slice';
import filtersSlice from './features/filters-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    global: globalSlice,
    filters: filtersSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type RootStateAuth = RootState["auth"]
export type RootStateGlobal = RootState["global"]