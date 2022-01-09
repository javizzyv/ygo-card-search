import { createAsyncThunk } from '@reduxjs/toolkit';
import '@babel/polyfill';

interface Data {
  _id: string;
  card: {
    name: string;
    type: string;
    desc: string;
  };
}

const url = 'http://localhost:5000/api/';

export const loadCards: any = createAsyncThunk('allCards/getAllCards', async () => {
  const data = await fetch(url + 'cards');

  return data.json();
});

export const addCard: any = createAsyncThunk('allCards/addCard', async (card) => {
  await fetch(url + 'card/newCard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(card)
  });

  return card;
});

export const removeCard: any = createAsyncThunk('allCards/removeCard', async (id) => {
  const card = await fetch(url + `cards/delete/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });

  const res = await card.json();

  return res;
});

export const updateCard: any = createAsyncThunk('allCards/updateCard', async (data: Data) => {
  await fetch(url + `cards/update/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data.card)
  });

  return data;
});
