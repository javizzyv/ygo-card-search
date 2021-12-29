import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CardRoute = () => {
  console.log(useParams());
  const { _id } = useParams();
  console.log(_id);

  const [t, i18n] = useTranslation('global');
  const [card, setCard] = useState({});

  const deleteCard = async (id) => {
    if (window.confirm('Are you sure?')) {
      await fetch(`http://localhost:5000/api/cards/delete/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
    }
  };

  useEffect(() => {
    fetch(`/api/cards/${_id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setCard(jsonRes);
      });
  }, [_id]);

  return (
    <div className="container">
      <div className="col">
        <div className="row">
          <h3>{card.name}</h3>
        </div>
        <div className="row">
          <p>{card.desc}</p>
        </div>

        <div className="row">
          <div className="col text-center">
            <a href="/listAll" role="button">
              <button className="btn btn-danger my-2 btn-lg" onClick={() => deleteCard(_id)}>
                {t('card.delete')}
              </button>
            </a>
          </div>
        </div>

        <a className="btn btn-primary" href="/listAll" role="button">
          {t('card.back')}
        </a>

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
    </div>
  );
};

export default CardRoute;
