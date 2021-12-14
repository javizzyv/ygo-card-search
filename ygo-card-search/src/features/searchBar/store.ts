import { configureStore } from '@reduxjs/toolkit';
import allCardsReducer from './allCards/allCardsSlice';
import searchBarReducer from './searchBar/searchBarSlice';

export default configureStore({
  reducer: {
    allCards: allCardsReducer,
    search: searchBarReducer
  }
});
