import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Card from '../../../components/Card';
import { selectFilteredAllCards } from './allCardsSlice';
import { useTranslation } from 'react-i18next';

interface Card {
  _id: number;
  name: string;
  type: string;
}

const AllCards = () => {
  const allCards: Card[] = useSelector(selectFilteredAllCards);
  const { isLoading } = useSelector((state: RootStateOrAny) => state.allCards);
  const [t, i18n] = useTranslation('global');

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h1>All cards:</h1>

      {allCards.map((card) => (
        <Card card={card} key={card._id}>
          Placeholder
        </Card>
      ))}

      <div className="row">
        <div className="col text-center">
          <a className="btn btn-success my-2 btn-lg" href={``} role="button">
            {t('card.add')}
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-1">
          <button type="button" className="btn btn-secondary btn-sm my-2" onClick={() => i18n.changeLanguage('es')}>
            ES
          </button>
        </div>

        <div className="col-1">
          <button type="button" className="btn btn-secondary btn-sm my-2" onClick={() => i18n.changeLanguage('en')}>
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
