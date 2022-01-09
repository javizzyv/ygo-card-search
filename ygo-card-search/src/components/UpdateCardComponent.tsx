import React from 'react';

const UpdateCardComponent = (props: any) => {
  const { t, handleUpdateCard, setName, setType, setDesc } = props;

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

        <div className="row">
          <button type="submit" className="btn btn-success btn-block mb-4">
            {t('card.update')}
          </button>
          <a className="btn btn-primary" href="/listAll" role="button">
            {t('card.back')}
          </a>
        </div>
      </form>
    </div>
  );
};

export default UpdateCardComponent;
