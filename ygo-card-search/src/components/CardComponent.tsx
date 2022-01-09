import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = (props: any) => {
  const { card, t } = props;

  return (
    <div className="container">
      <li className="list-group-item" key={card._id}>
        <div className="container">
          <div className="row my-1">
            <div className="row">
              <div className="col-6">
                <img src="/cardReverse.png" className="w-25" alt="cardImage"></img>
              </div>
              <div className="col">
                <div className="row my-1">
                  <Link to={`/listAll/${card._id}`}>
                    {t('card.name')}: {card.name}
                  </Link>
                </div>
                <div className="row my-1">
                  {t('card.type')}: {card.type}
                </div>

                <div className="row my-1">
                  <a className="btn btn-primary" href={`https://db.ygoprodeck.com/card/?search=${card.name}`} role="button">
                    {t('card.more-info')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CardComponent;
