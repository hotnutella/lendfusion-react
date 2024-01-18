import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './slices/api';

export const store = configureStore({
  reducer: combineReducers({
    [api.reducerPath]: api.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
    
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
