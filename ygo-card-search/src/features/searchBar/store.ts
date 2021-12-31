import { configureStore } from '@reduxjs/toolkit';
import allCardsReducer from './allCards/allCardsSlice';
import searchBarReducer from './searchBar/searchBarSlice';
import userReducer from './users/userSlice';
import { logger } from 'redux-logger';

export default configureStore({
  reducer: {
    allCards: allCardsReducer,
    search: searchBarReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
