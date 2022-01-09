import React from 'react';

const NewCardComponent = (props: any) => {
  const { t, handleNewCard, setName, setType, setDesc } = props;

  return (
    <div className="container">
      <h2 className="my-3">{t('card.add')}:</h2>
      <form onSubmit={handleNewCard}>
        <div className="form-outline mb-4">
          <label className="form-label">{t('card.name')}:</label>
          <input className="form-control" type="text" required onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">{t('card.type')}:</label>
          <select className="form-select" required onChange={(e) => setType(e.target.value)}>
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
          <textarea className="form-control" required onChange={(e) => setDesc(e.target.value)} />
        </div>
        {/* <Link to="/listAll"> */}
        <div className="row">
          <a href="/listAll" role="button">
            <button type="submit" className="btn btn-success btn-block mb-4">
              {t('card.add')}
            </button>
          </a>
          {/* </Link> */}
          <a className="btn btn-primary" href="/listAll" role="button">
            {t('card.back')}
          </a>
        </div>
      </form>
    </div>
  );
};

export default NewCardComponent;
