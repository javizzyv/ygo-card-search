import React from 'react';
// import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

interface Card {
  name: string;
  type: string;
}

interface Props {
  children: any;
  card: Card;
}

export default function Card({ card, children }: Props) {
  const [t, i18n] = useTranslation('global');

  return (
    <li className="list-group-item" key={card.name}>
      <div className="container">
        <div className="row my-1">
          <div className="row">
            <div className="col-6">
              <img src="" className="w-25" alt="cardImage"></img>
            </div>
            <div className="col">
              <div className="row">
                {t('card.name')}: {card.name}
              </div>
              <div className="row">
                {t('card.type')}: {card.type}
              </div>

              {/* {checkLevel(card)}

                            {checkAtk(card)}

                            {checkDef(card)} */}

              <div className="row">
                <a className="btn btn-primary" href={`https://db.ygoprodeck.com/card/?search=${card.name}`} role="button">
                  {t('card.more-info')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span>{children}</span>
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </li>
  );
}

// Card.propTypes = {
//   children: PropTypes.any,
//   card: PropTypes.any
// };
