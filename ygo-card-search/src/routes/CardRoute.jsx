import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CardRoute = () => {
  console.log(useParams());
  const { _id } = useParams();
  console.log(_id);

  const [t, i18n] = useTranslation('global');
  const [card, setCard] = useState({});

  // useEffect(() => {
  //   console.log('Dentro de useEffect');

  //   fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=34541863')
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setCard(result.data[0]);
  //     });

  //   console.log(card);
  // }, [id]);

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

    // fetch(`/api/card/${id}`)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setCard(result.data[0]);
    //   });
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
        <a className="btn btn-primary" href="/listAll" role="button">
          {t('card.back')}
        </a>
        <button onClick={() => i18n.changeLanguage('es')}>ES</button>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      </div>
    </div>
  );
};

export default CardRoute;
