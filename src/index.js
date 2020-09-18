import 'bootstrap/dist/css/bootstrap.css';
import i18next from "i18next";
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";
import { Provider } from 'react-redux';
import store from 'store';
import App from './App';
import * as serviceWorker from './serviceWorker';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
});

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <Suspense fallback="loading">
          <App />
        </Suspense>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
