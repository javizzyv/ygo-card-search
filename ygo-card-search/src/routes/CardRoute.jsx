import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { removeCard } from '../actions/allCards';
import SwitchLang from '../components/SwitchLanguage';

const CardRoute = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  console.log(_id);

  /* eslint-disable no-unused-vars */
  const [t, i18n] = useTranslation('global');
  /* eslint-enable no-unused-vars */
  const [card, setCard] = useState({});

  const deleteCard = async (id) => {
    if (window.confirm('Are you sure?')) {
      await dispatch(removeCard(id));
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
            <a href={`/updateCard/${_id}`} role="button" className="btn btn-info my-2 btn-lg">
              Update
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            {/* <a href="/listAll" role="button"> */}
            <button className="btn btn-danger my-2 btn-lg" onClick={() => deleteCard(_id)}>
              {t('card.delete')}
            </button>
            {/* </a> */}
          </div>
        </div>

        <a className="btn btn-primary" href="/listAll" role="button">
          {t('card.back')}
        </a>

        <SwitchLang />
      </div>
    </div>
  );
};

export default CardRoute;
