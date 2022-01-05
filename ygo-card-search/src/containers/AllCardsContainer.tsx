import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Card from './CardContainer';
import { selectFilteredAllCards } from '../reducers/allCards';
import { useTranslation } from 'react-i18next';
import AllCardsComponent from '../components/AllCardsComponent';

interface Card {
  _id: number;
  name: string;
  type: string;
}

const AllCardsContainer = () => {
  const allCards: Card[] = useSelector(selectFilteredAllCards);
  const { isLoading } = useSelector((state: RootStateOrAny) => state.allCards);
  const [t, i18n] = useTranslation('global');

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <AllCardsComponent t={t} i18n={i18n} allCards={allCards}></AllCardsComponent>;
};

export default AllCardsContainer;
