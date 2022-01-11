import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './containers/HomeContainer';
import CardInfoContainer from './containers/CardInfoContainer';
import UserContainer from './containers/UserContainer';
import { loadCards } from './actions/allCards';
import AllCards from './containers/allCards';
import SwitchLang from './components/SwitchLanguage';
import { useTranslation } from 'react-i18next';
import UsersContainer from './containers/UsersContainer';
import NewCardContainer from './containers/NewCardContainer';
import UpdateCardContainer from './containers/UpdateCardContainer';
import SignUpContainer from './containers/SignUpContainer';
import { clearUser, selectUser } from './reducers/user';

function App() {
  const [t, i18n] = useTranslation('global');
  const dispatch = useDispatch();
  const { hasError } = useSelector((state: any) => state.allCards);
  const token = useSelector(selectUser);

  useEffect(() => {
    dispatch(loadCards());
  }, [dispatch]);

  const onTryAgainHandler = () => {
    dispatch(loadCards());
  };

  return (
    <div className="container">
      <Router>
        <div className="container">
          <div className="container my-5 mx-1">
            <div className="btn-group">
              <NavLink to="/" className="btn btn-dark mx-1">
                {t('nav.home')}
              </NavLink>
              <Link to="/listAll" className="btn btn-dark">
                {t('nav.cards')}
              </Link>
              <Link to="/users" className="btn btn-dark mx-1">
                {t('nav.users')}
              </Link>
              {token === '' && (
                <div>
                  <Link to="/login" className="btn btn-dark">
                    {t('nav.login')}
                  </Link>
                  <Link to="/signUp" className="btn btn-dark mx-1">
                    {t('nav.sign')}
                  </Link>
                </div>
              )}
              {token !== '' && (
                <button type="button" className="btn btn-dark btn-sm btn-rounded" onClick={() => dispatch(clearUser())}>
                  {t('token.out')}
                </button>
              )}
            </div>
          </div>
          <hr />
          <Routes>
            <Route path="/listAll/:_id" element={<CardInfoContainer t={t} />} />

            <Route path="/updateCard/:_id" element={<UpdateCardContainer t={t} />} />

            <Route path="/listAll" element={<AllCards t={t} onTry={onTryAgainHandler} hasError={hasError} />} />

            <Route path="/login" element={<UserContainer t={t} />} />

            <Route path="/signUp" element={<SignUpContainer t={t} />} />

            <Route path="/users" element={<UsersContainer t={t} />} />

            <Route path="/newCard" element={<NewCardContainer t={t} />} />

            <Route path="/" element={<Home t={t} />} />
          </Routes>
        </div>
      </Router>
      <SwitchLang i18n={i18n} />
    </div>
  );
}

export default App;
