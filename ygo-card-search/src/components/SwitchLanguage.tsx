import React from 'react';

const SwitchLang = (props: any) => {
  const { i18n } = props;

  return (
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
  );
};

export default SwitchLang;
