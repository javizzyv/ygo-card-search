import { configureStore } from '@reduxjs/toolkit';
import allCardsReducer from './reducers/allCards';
import searchBarReducer from './reducers/searchBar';
import userReducer from './reducers/user';
import { logger } from 'redux-logger';

export default configureStore({
  reducer: {
    allCards: allCardsReducer,
    search: searchBarReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
