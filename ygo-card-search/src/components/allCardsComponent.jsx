import React from 'react';
import AllCards from './AllCards';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import store from '../features/searchBar/store';
import { useSelector } from 'react-redux';
import { selectUser } from '../reducers/userReducer';
// import { token } from './Login';

const AllCardsComponent = (props) => {
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
