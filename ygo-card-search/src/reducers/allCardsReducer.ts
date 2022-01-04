import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from './searchBarReducer';
import '@babel/polyfill';
import { RootStateOrAny } from 'react-redux';
import { addCard, loadCards, removeCard, updateCard } from '../features/allCards/allCardsActions';

interface Card {
  id: string;
  name: string;
  type: string;
}

interface allCardState {
  cards: Card[];
  isLoading: boolean;
  hasError: boolean;
}

export const allCardsSlice = createSlice({
  name: 'allCards',
  initialState: {
    cards: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: {
    [loadCards.pending]: (state: allCardState) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadCards.fulfilled]: (state: allCardState, action: any) => {
      state.cards = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadCards.rejected]: (state: allCardState) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [addCard.pending]: (state: allCardState) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [addCard.fulfilled]: (state: allCardState, action: any) => {
      state.cards = [...state.cards, action.payload];
      state.isLoading = false;
      state.hasError = false;
    },
    [addCard.rejected]: (state: allCardState) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [removeCard.pending]: (state: allCardState) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [removeCard.fulfilled]: (state: allCardState, action: any) => {
      state.cards = state.cards.filter((c) => c.id !== action.payload.id);
      state.isLoading = false;
      state.hasError = false;
    },
    [removeCard.rejected]: (state: allCardState) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [updateCard.pending]: (state: allCardState) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [updateCard.fulfilled]: (state: allCardState, action: any) => {
      state.cards.map((c) => (c.id === action.payload.id ? (c = action.payload) : c)); //= action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [updateCard.rejected]: (state: allCardState) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
});

// export const allCardsSlice = createSlice(sliceOption);

export const selectAllCards = (state: RootStateOrAny) => state.allCards.cards;

export const selectFilteredAllCards = (state: any) => {
  const allCards = selectAllCards(state);
  const searchTerm = selectSearchTerm(state);
  // console.log(allCards.length);

  return allCards.filter((card: any) => {
    return card.name.includes(searchTerm);
  });
};

export default allCardsSlice.reducer;
