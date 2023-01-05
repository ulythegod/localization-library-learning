import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { setLang } from './lib/i18n';

function init() {
  const lang = navigator.language.split('-')[0];
  setLang(lang);

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

init();
