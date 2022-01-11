import React from 'react';
import SearchBarContainer from './SearchBarContainer';
import { useSelector } from 'react-redux';
import { selectUser } from '../reducers/user';
import AllCardsContainer from './AllCardsContainer';

const AllCards = (props: any) => {
  const { onTry, hasError } = props;
  const { t } = props;
  const token = useSelector(selectUser);

  if (!token) {
    return <h1>{t('token.yes')}</h1>;
  }

  return (
    <div className="container">
      <SearchBarContainer t={t} />
      {hasError ? <button onClick={onTry}>{t('cards.try')}</button> : <AllCardsContainer t={t}></AllCardsContainer>}
    </div>
  );
};

export default AllCards;
