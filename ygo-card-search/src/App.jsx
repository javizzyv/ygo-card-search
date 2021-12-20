import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadCards } from './features/searchBar/allCards/allCardsSlice';
// import AllCards from './features/searchBar/allCards/AllCards';
import AllCardsComponent from './components/allCardsComponent';
// import SearchBar from './features/searchBar/searchBar/SearchBar';
import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const dispatch = useDispatch();
  // const { hasError } = useSelector((state: any) => state.allCards);
  const { hasError } = useSelector((state) => state.allCards);

  useEffect(() => {
    dispatch(loadCards());
  }, [dispatch]);

  const onTryAgainHandler = () => {
    dispatch(loadCards());
  };

  return (
    // <div>
    //   <SearchBar></SearchBar>
    //   {hasError ? <button onClick={onTryAgainHandler}>Try again</button> : <AllCards></AllCards>}
    // </div>
    <Router>
      <div className="container">
        <div className="container my-5 mx-1">
          <div className="btn-group">
            <NavLink to="/" className="btn btn-dark" activeClassName="active">
              Inicio
            </NavLink>
            <Link to="/listAll" className="btn btn-dark">
              Cards
            </Link>
          </div>
        </div>
        <hr />
        <Routes>
          <Route path="/listAll" element={<AllCardsComponent onTry={onTryAgainHandler} hasError={hasError} />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
