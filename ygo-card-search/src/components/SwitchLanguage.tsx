import React from 'react';

const SwitchLang = (props: any) => {
  const { i18n } = props;

  return (
    <div className="row my-4">
      <div className="col-1">
        <button type="button" className="btn btn-dark btn-sm btn-rounded" onClick={() => i18n.changeLanguage('es')}>
          ES
        </button>
      </div>

      <div className="col-1">
        <button type="button" className="btn btn-dark btn-sm btn-rounded" onClick={() => i18n.changeLanguage('en')}>
          EN
        </button>
      </div>
    </div>
  );
};

export default SwitchLang;
