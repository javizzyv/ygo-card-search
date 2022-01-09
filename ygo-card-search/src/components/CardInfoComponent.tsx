import React from 'react';

const CardInfoComponent = (props: any) => {
  const { t, card, deleteCard, _id } = props;

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
              {t('card.update')}
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
      </div>
    </div>
  );
};

export default CardInfoComponent;
