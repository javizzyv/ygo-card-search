import { loadCards } from '../src/features/searchBar/allCards/allCardsSlice';
// import reducer from '../src/features/searchBar/allCards/allCardsSlice';
// import '@types/jest';
// import '@babel/polyfill';
// import store from '../src/features/searchBar/store';

describe('Tests for all cards actions and reducer', () => {
  test('Should load all the cards', async () => {
    expect(loadCards().length).toBe(11655);
  });
});
