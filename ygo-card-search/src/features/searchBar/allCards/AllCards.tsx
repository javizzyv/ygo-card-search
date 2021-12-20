import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Card from '../../../components/Card';
import { selectFilteredAllCards } from './allCardsSlice';

interface Card {
  id: string;
  name: string;
  type: string;
}

const AllCards = () => {
  const allCards: Card[] = useSelector(selectFilteredAllCards);
  const { isLoading } = useSelector((state: RootStateOrAny) => state.allCards);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h1>All cards:</h1>
      {allCards.map((card) => (
        <Card card={card} key={card.id}>
          Placeholder
        </Card>
      ))}
    </div>
  );
};

export default AllCards;
