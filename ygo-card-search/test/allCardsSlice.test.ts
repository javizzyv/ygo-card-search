import { loadCards } from '../src/features/searchBar/allCards/allCardsSlice';
import allCardsReducer from '../src/features/searchBar/allCards/allCardsSlice';
// import {expect} from '@jest/globals';
// import '@types/jest';
// import '@babel/polyfill';
// import store from '../src/features/searchBar/store';

// interface State {
//   id: number;
//   name: string;
//   type: string;
//   desc: string;
// }

describe('All cards reducer', () => {
  // const cardsState = {
  //   cardsVector: [
  //     {
  //       id: 1,
  //       name: 'Dragon',
  //       type: 'monster',
  //       desc: 'Default monster'
  //     },
  //     {
  //       id: 2,
  //       name: 'Fire',
  //       type: 'spell',
  //       desc: 'Default spell'
  //     },
  //     {
  //       id: 3,
  //       name: 'Hole',
  //       type: 'trap',
  //       desc: 'Default trap'
  //     }
  //   ]
  // };

  const cardsState = {
    id: 1,
    name: 'Dragon',
    type: 'monster',
    desc: 'Default monster'
  };

  const initialState = {
    cards: [],
    isLoading: false,
    hasError: false
  };

  // const newTeams = [
  //   {
  //     id: 4,
  //     name: 'Mecha',
  //     type: 'xyz',
  //     desc: 'Default xyz'
  //   },
  //   {
  //     id: 5,
  //     name: 'Dragon',
  //     type: 'monster',
  //     desc: 'Default monster'
  //   }
  // ]

  test('Should be able to load all cards', async () => {
    expect(allCardsReducer({ ...initialState }, { type: loadCards.fulfilled, payload: cardsState })).toEqual({ ...initialState, cards: cardsState });
  });

  test('Should change state when it starts loading data', async () => {
    expect(allCardsReducer({ ...initialState }, { type: loadCards.pending, payload: cardsState })).toEqual({ ...initialState, isLoading: true });
  });

  test('Should change state when the load is rejected', async () => {
    expect(allCardsReducer({ ...initialState }, { type: loadCards.rejected, payload: cardsState })).toEqual({ ...initialState, hasError: true });
  });
});

// const initialState = {
//   cards: [],
//   isLoading: false,
//   hasError: false
// }

// describe('Tests for all cards actions and reducer', () => {
//   test('Should load all the cards', async () => {
//     // console.log(loadCards());
//     expect(loadCards().length === 11655).toBe(true);
//   });
// });
