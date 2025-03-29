import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import news from './news/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  news,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: { persistedReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
