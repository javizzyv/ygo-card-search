import { configureStore } from '@reduxjs/toolkit';
import allCardsReducer from './reducers/allCards';
import searchBarReducer from './reducers/searchBar';
import userReducer from './reducers/user';
import { logger } from 'redux-logger';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  allCards: allCardsReducer,
  search: searchBarReducer,
  user: userReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
