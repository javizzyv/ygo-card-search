import React from 'react';
import CardContainer from '../containers/CardContainer';

interface Card {
  name: string;
  type: string;
  desc: string;
  _id: number;
}

interface Props {
  allCards: Card[];
  t: Function;
}

const AllCardsComponent = (props: Props) => {
  const { t, allCards } = props;

  return (
    <div className="container">
      <h1>{t('cards.all')}</h1>

      {allCards.map((card) => (
        <CardContainer card={card} key={card._id} />
      ))}

      <div className="row">
        <div className="col text-center">
          <a className="btn btn-success my-2 btn-lg" href={`/newCard`} role="button">
            {t('card.add')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllCardsComponent;
