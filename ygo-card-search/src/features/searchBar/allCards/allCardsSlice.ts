import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchBar/searchBarSlice';
import '@babel/polyfill';

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

export const loadCards: any = createAsyncThunk('allCards/getAllCards', async () => {
  const data = await fetch('http://localhost:5000/api/cards')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((jsonRes) => {
      return jsonRes;
    });
  return data;
});

const sliceOption = {
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
    }
  }
};

export const allCardsSlice = createSlice(sliceOption);

export const selectAllCards = (state: any) => state.allCards.cards;

export const selectFilteredAllCards = (state: any) => {
  const allCards = selectAllCards(state);
  const searchTerm = selectSearchTerm(state);
  // console.log(allCards.length);

  return allCards.filter((card: any) => {
    return card.name.includes(searchTerm);
  });
};

export default allCardsSlice.reducer;
