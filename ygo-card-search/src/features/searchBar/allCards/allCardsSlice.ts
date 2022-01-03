import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchBar/searchBarSlice';
import '@babel/polyfill';
import { RootStateOrAny } from 'react-redux';

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

export const addCard: any = createAsyncThunk('allCards/addCard', async (card) => {
  console.log(card);
  console.log(JSON.stringify(card));

  fetch(`http://localhost:5000/api/card/newCard`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(card)
  }).then(() => {
    console.log('new card added');
  });

  return card;
});

export const removeCard: any = createAsyncThunk('allCards/removeCard', async (id) => {
  const card = await fetch(`http://localhost:5000/api/cards/delete/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });

  const res = await card.json();

  return res;
});

export const updateCard: any = createAsyncThunk('allCards/updateCard', async (_id, card) => {
  const res = await fetch(`http://localhost:5000/api/cards/update/${_id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(card)
  });
  // .then(() => {
  //   console.log('card updated');
  // });

  const json = await res.json();
  return json;
});

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
