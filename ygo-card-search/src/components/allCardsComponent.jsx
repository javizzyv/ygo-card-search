import React from 'react';
import PropTypes from 'prop-types';
import Card from '../containers/Card';

const AllCardsComponent = (props) => {
  const { t, i18n, allCards } = props;

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
          <a className="btn btn-success my-2 btn-lg" href={`/newCard`} role="button">
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

AllCardsComponent.propTypes = {
  t: PropTypes.func,
  i18n: PropTypes.any,
  allCards: PropTypes.array
};

export default AllCardsComponent;
