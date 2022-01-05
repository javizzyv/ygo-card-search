import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import store from '../features/searchBar/store';
import { useSelector } from 'react-redux';
import { selectUser } from '../reducers/user';
import AllCardsContainer from './AllCardsContainer';
// import { token } from './Login';

const AllCards = (props) => {
  const { onTry, hasError } = props;
  const token = useSelector(selectUser);
  console.log(token);
  const placeholder = true;

  if (!placeholder) {
    return (
      <div className="container">
        <h2>You are not authorized to enter this domain</h2>
      </div>
    );
  } else {
    return (
      <div className="container">
        <SearchBar></SearchBar>
        {hasError ? <button onClick={onTry}>Try again</button> : <AllCardsContainer></AllCardsContainer>}
      </div>
    );
  }
};

AllCards.propTypes = {
  onTry: PropTypes.func,
  hasError: PropTypes.bool
};

export default AllCards;
