import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadCards } from './features/searchBar/allCards/allCardsSlice';
import AllCards from './features/searchBar/allCards/AllCards';
import SearchBar from './features/searchBar/searchBar/SearchBar';
import React, { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { hasError } = useSelector((state: any) => state.allCards);

  useEffect(() => {
    dispatch(loadCards());
  }, [dispatch]);

  const onTryAgainHandler = () => {
    dispatch(loadCards());
  };

  return (
    <div>
      <SearchBar></SearchBar>
      {hasError ? <button onClick={onTryAgainHandler}>Try again</button> : <AllCards></AllCards>}
    </div>
  );
}

export default App;
