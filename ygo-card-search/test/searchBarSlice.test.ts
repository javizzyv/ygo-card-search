import SearchBarReducer, { clearSearchTerm } from '../src/reducers/searchBarReducer';
import { setSearchTerm } from '../src/reducers/searchBarReducer';

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
