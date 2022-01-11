import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import store from './store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import '@babel/polyfill';

import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
