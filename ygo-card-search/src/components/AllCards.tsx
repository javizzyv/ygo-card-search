import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Card from './Card';
import { selectFilteredAllCards } from '../reducers/allCardsReducer';
import { useTranslation } from 'react-i18next';
import AllCardContainer from '../containers/AllCardsContainer';
// import { loadCards } from './allCardsSlice';

interface Card {
  _id: number;
  name: string;
  type: string;
}

const AllCards = () => {
  // loadCards();
  const allCards: Card[] = useSelector(selectFilteredAllCards);
  const { isLoading } = useSelector((state: RootStateOrAny) => state.allCards);
  const [t, i18n] = useTranslation('global');

  useEffect(() => {}, []);

  // useEffect(() => {
  //   window.location.reload();
  // }, [useSelector(selectFilteredAllCards)]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    // <div className="container">
    //   <h1>All cards:</h1>

    //   {allCards.map((card) => (
    //     <Card card={card} key={card._id}>
    //       Placeholder
    //     </Card>
    //   ))}

    //   <div className="row">
    //     <div className="col text-center">
    //       <a className="btn btn-success my-2 btn-lg" href={`/newCard`} role="button">
    //         {t('card.add')}
    //       </a>
    //     </div>
    //   </div>

    //   <div className="row">
    //     <div className="col-1">
    //       <button type="button" className="btn btn-secondary btn-sm my-2" onClick={() => i18n.changeLanguage('es')}>
    //         ES
    //       </button>
    //     </div>

    //     <div className="col-1">
    //       <button type="button" className="btn btn-secondary btn-sm my-2" onClick={() => i18n.changeLanguage('en')}>
    //         EN
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <AllCardContainer t={t} i18n={i18n} allCards={allCards}></AllCardContainer>
  );
};

export default AllCards;
