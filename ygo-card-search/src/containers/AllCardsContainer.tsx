import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Card from './CardContainer';
import { selectFilteredAllCards } from '../reducers/allCards';
import AllCardsComponent from '../components/AllCardsComponent';

interface Card {
  _id: number;
  name: string;
  type: string;
  desc: string;
}

const AllCardsContainer = (props: any) => {
  const allCards: Card[] = useSelector(selectFilteredAllCards);
  const { isLoading } = useSelector((state: RootStateOrAny) => state.allCards);
  const { t } = props;

  if (isLoading) {
    return <h1>{t('cards.loading')}</h1>;
  }

  return <AllCardsComponent t={t} allCards={allCards}></AllCardsComponent>;
};

export default AllCardsContainer;
