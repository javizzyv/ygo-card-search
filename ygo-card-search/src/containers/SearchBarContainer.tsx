import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBarComponent from '../components/SearchBarComponent';
import { selectSearchTerm, setSearchTerm } from '../reducers/searchBar';

const SearchBarContainer = (props: any) => {
  const { t } = props;
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return <SearchBarComponent onSearchChangeHandler={onSearchChangeHandler} searchTerm={searchTerm} t={t} />;
};

export default SearchBarContainer;
