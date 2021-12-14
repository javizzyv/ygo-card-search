import { loadCards } from '../src/features/searchBar/allCards/allCardsSlice';
// import reducer from '../src/features/searchBar/allCards/allCardsSlice';
// import '@types/jest';
// import '@babel/polyfill';
// import store from '../src/features/searchBar/store';

// interface Card {
//   id: string;
//   name: string;
//   type: string;
// }

// const initialState = {
//   cards: [],
//   isLoading: false,
//   hasError: false
// }

describe('Tests for all cards actions and reducer', () => {
  test('Should load all the cards', async () => {
    // console.log(loadCards());
    expect(loadCards().length === 11655).toBe(true);
  });
});
