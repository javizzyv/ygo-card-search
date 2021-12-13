import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchBar/searchBarSlice';

export const loadCards = createAsyncThunk('allCards/getAllCards', async () => {
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
    [loadCards.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadCards.fulfilled]: (state, action) => {
      state.cards = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadCards.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
};

export const allCardsSlice = createSlice(sliceOption);

export const selectAllCards = (state) => state.allCards.cards;

export const selectFilteredAllCards = (state) => {
  const allCards = selectAllCards(state);
  // console.log(allCards);
  const searchTerm = selectSearchTerm(state);
  // console.log(searchTerm);
  // const darks = allCards.filter((card) => {return card.name.includes('Dark')})
  // console.log(darks);
  // console.log(allCards.filter((card) => {card.name.includes(searchTerm)}));

  return allCards.filter((card) => {
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
