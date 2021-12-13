import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { clearSearchTerm, selectSearchTerm, setSearchTerm } from './searchBarSlice';
import { selectSearchTerm, setSearchTerm } from './searchBarSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  //   const onSearchTermClearHandler = () => {
  //     dispatch(clearSearchTerm());
  //   };

  return (
    <div>
      <input id="search" type="text" value={searchTerm} onChange={onSearchChangeHandler} placeholder="Search cards"></input>
    </div>
  );
};

export default SearchBar;
