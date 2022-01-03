import SearchBarReducer, { clearSearchTerm } from '../src/features/searchBar/searchBar/searchBarSlice';
import { setSearchTerm } from '../src/features/searchBar/searchBar/searchBarSlice';

describe('Search bar reducer', () => {
  test('Should be able to save the search term', () => {
    const termState = 'testTerm';
    expect(SearchBarReducer('', setSearchTerm(termState))).toEqual(termState);
  });

  test('Should be able to clear the search term', () => {
    const termState = 'testTerm';
    expect(SearchBarReducer(termState, clearSearchTerm)).toEqual('');
  });
});
