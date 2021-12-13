import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ card, children }) {
  return (
    <li className="list-group-item" key={card.name}>
      <div className="container">
        <div className="row my-1">
          <div className="row">
            <div className="col-6">
              <img src="" className="w-25" alt="cardImage"></img>
            </div>
            <div className="col">
              <div className="row">Name: {card.name}</div>
              <div className="row">Type: {card.type}</div>

              {/* {checkLevel(card)}

                            {checkAtk(card)}

                            {checkDef(card)} */}

              <div className="row">
                <a className="btn btn-primary" href={`https://db.ygoprodeck.com/card/?search=${card.name}`} role="button">
                  More info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span>{children}</span>
    </li>
  );
}

Card.propTypes = {
  children: PropTypes.any,
  card: PropTypes.any
};
