import { createAsyncThunk } from '@reduxjs/toolkit';
import '@babel/polyfill';

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
