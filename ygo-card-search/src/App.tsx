import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './containers/Home';
import CardRoute from './routes/CardRoute';
import Users from './containers/Users';
import NewCard from './containers/NewCard';
import UpdateCard from './containers/UpdateCard';
import SignUp from './containers/SignUp';
import User from './containers/User';
import { loadCards } from './actions/allCards';
import AllCards from './containers/allCards';
// import Login from './components/Login';

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

          <Route path="/listAll" element={<AllCards onTry={onTryAgainHandler} hasError={hasError} />} />

          <Route path="/login" element={<User />} />

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
