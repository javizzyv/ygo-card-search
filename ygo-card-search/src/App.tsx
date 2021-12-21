import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadCards } from './features/searchBar/allCards/allCardsSlice';
import AllCardsComponent from './components/allCardsComponent';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import CardRoute from './routes/CardRoute';

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
    <Router>
      <div className="container">
        <div className="container my-5 mx-1">
          <div className="btn-group">
            <NavLink to="/" className="btn btn-dark">
              Home
            </NavLink>
            <Link to="/listAll" className="btn btn-dark">
              Cards
            </Link>
          </div>
        </div>
        <hr />
        <Routes>
          <Route path="/listAll/:id" element={<CardRoute />} />

          <Route path="/listAll" element={<AllCardsComponent onTry={onTryAgainHandler} hasError={hasError} />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
