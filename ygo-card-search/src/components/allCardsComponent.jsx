import React from 'react';
import AllCards from '../features/searchBar/allCards/AllCards';
import PropTypes from 'prop-types';
import SearchBar from '../features/searchBar/searchBar/SearchBar';
import store from '../features/searchBar/store';
import { useSelector } from 'react-redux';
// import { token } from './Login';

const AllCardsComponent = (props) => {
  const { onTry, hasError } = props;
  const token = useSelector(selectUser);
  console.log(token);

  if (!token) {
    return (
      <div className="container">
        <h2>You are not authorized to enter this domain</h2>
      </div>
    );
  } else {
    return (
      <div className="container">
        <SearchBar></SearchBar>
        {hasError ? <button onClick={onTry}>Try again</button> : <AllCards></AllCards>}
      </div>
    );
  }
};

AllCardsComponent.propTypes = {
  onTry: PropTypes.func,
  hasError: PropTypes.bool
};

export default AllCardsComponent;
