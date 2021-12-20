import { configureStore } from '@reduxjs/toolkit';
import allCardsReducer from './allCards/allCardsSlice';
import searchBarReducer from './searchBar/searchBarSlice';
import { logger } from 'redux-logger';

export default configureStore({
  reducer: {
    allCards: allCardsReducer,
    search: searchBarReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
