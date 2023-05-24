import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './services/productsApi.ts';
import selectorReducer from './reducers/selectorReducer.ts';

export const store = configureStore({
  reducer: {
    selector: selectorReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
