import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchBar/searchBarSlice';

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
  const data = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then((res) => res.json())
    .then((result) => {
      return result.data;
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

  return allCards.filter((card: any) => {
    return card.name.includes(searchTerm);
  });
};

// export const {addCard, removeCard, showAll} = allCardsReducer.actions;
export default allCardsSlice.reducer;

// interface Props {
//     id: number
// }

// interface Action {
//     type: string,
//     payload: {
//         id: number
//     }
// }
