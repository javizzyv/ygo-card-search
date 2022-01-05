import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { clearSearchTerm, selectSearchTerm, setSearchTerm } from './searchBarSlice';
import { selectSearchTerm, setSearchTerm } from '../reducers/searchBar';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  //   const onSearchTermClearHandler = () => {
  //     dispatch(clearSearchTerm());
  //   };

  return (
    <div className="container">
      <h1>Type in the bar to start searching!</h1>
      <input id="search" type="text" value={searchTerm} onChange={onSearchChangeHandler} placeholder="Search cards"></input>
    </div>
  );
};

export default SearchBar;
