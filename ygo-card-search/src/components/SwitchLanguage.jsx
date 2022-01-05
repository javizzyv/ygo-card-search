import React from 'react';
import { useTranslation } from 'react-i18next';

const SwitchLang = () => {
  /* eslint-disable no-unused-vars */
  const [t, i18n] = useTranslation('global');
  /* eslint-enable no-unused-vars */
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
