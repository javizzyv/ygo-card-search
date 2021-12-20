import React from 'react';
import AllCards from '../features/searchBar/allCards/AllCards';
import PropTypes from 'prop-types';
import SearchBar from '../features/searchBar/searchBar/SearchBar';

const AllCardsComponent = (props) => {
  const { onTry, hasError } = props;
  return (
    <div className="container">
      <SearchBar></SearchBar>
      {hasError ? <button onClick={onTry}>Try again</button> : <AllCards></AllCards>}
    </div>
  );
};

AllCardsComponent.propTypes = {
  onTry: PropTypes.func,
  hasError: PropTypes.bool
};

export default AllCardsComponent;
