import { configureStore } from '@reduxjs/toolkit';
import allCardsReducer from '../reducers/allCardsReducer';
import searchBarReducer from '../reducers/searchBarReducer';
import userReducer from '../reducers/userReducer';
import { logger } from 'redux-logger';

export default configureStore({
  reducer: {
    allCards: allCardsReducer,
    search: searchBarReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
