import React from 'react';
import SearchBarContainer from './SearchBarContainer';
import { useSelector } from 'react-redux';
import { selectUser } from '../reducers/user';
import AllCardsContainer from './AllCardsContainer';

const AllCards = (props: any) => {
  const { onTry, hasError } = props;
  const { t } = props;
  const token = useSelector(selectUser);
  console.log(token);
  const placeholder = true;

  if (!placeholder) {
    return (
      <div className="container">
        <h2>{t('cards.domain')}</h2>
      </div>
    );
  } else {
    return (
      <div className="container">
        <SearchBarContainer t={t} />
        {hasError ? <button onClick={onTry}>{t('cards.try')}</button> : <AllCardsContainer t={t}></AllCardsContainer>}
      </div>
    );
  }
};

export default AllCards;
