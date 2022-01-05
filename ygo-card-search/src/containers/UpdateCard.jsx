import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateCard } from '../actions/allCards';
import SwitchLang from '../components/SwitchLanguage';

const UpdateCard = () => {
  /* eslint-disable no-unused-vars */
  const [t, i18n] = useTranslation('global');
  /* eslint-enable no-unused-vars */
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const { _id } = useParams();

  const handleUpdateCard = (e) => {
    e.preventDefault();
    const card = { name, type, desc };

    const data = { _id, card };

    dispatch(updateCard(data));
  };

  return (
    <div className="container">
      <h2 className="my-3">{t('card.update')}</h2>
      <form onSubmit={handleUpdateCard}>
        <div className="form-outline mb-4">
          <label className="form-label">{t('card.name')}:</label>
          <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">{t('card.type')}:</label>
          <select className="form-select" onChange={(e) => setType(e.target.value)}>
            <option value="" selected disabled hidden>
              {t('card.select')}
            </option>
            <option value="monster">{t('card.monster')}</option>
            <option value="spell">{t('card.spell')}</option>
            <option value="trap">{t('card.trap')}</option>
            <option value="xyz">xyz</option>
          </select>
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">{t('card.desc')}:</label>
          <textarea className="form-control" onChange={(e) => setDesc(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-success btn-block mb-4">
          {t('card.update')}
        </button>
        <a href="/listAll" role="button">
          {t('card.back')}
        </a>

        <SwitchLang />
      </form>
    </div>
  );
};

export default UpdateCard;
