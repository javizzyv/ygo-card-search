import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadCards } from './features/searchBar/allCards/allCardsSlice';
import AllCardsComponent from './components/allCardsComponent';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import CardRoute from './routes/CardRoute';
import Users from './components/Users';
import NewCard from './components/NewCard';
import UpdateCard from './components/UpdateCard';
import SignUp from './components/SignUp';
import Login from './components/Login';

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
            <NavLink to="/" className="btn btn-dark mx-1">
              Home
            </NavLink>
            <Link to="/listAll" className="btn btn-dark">
              Cards
            </Link>
            <Link to="/users" className="btn btn-dark mx-1">
              Users
            </Link>
            <Link to="/login" className="btn btn-dark">
              Login
            </Link>
            <Link to="/signUp" className="btn btn-dark mx-1">
              Sign Up
            </Link>
          </div>
        </div>
        <hr />
        <Routes>
          <Route path="/listAll/:_id" element={<CardRoute />} />

          <Route path="/updateCard/:_id" element={<UpdateCard />} />

          <Route path="/listAll" element={<AllCardsComponent onTry={onTryAgainHandler} hasError={hasError} />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signUp" element={<SignUp />} />

          <Route path="/users" element={<Users />} />

          <Route path="/newCard" element={<NewCard />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
