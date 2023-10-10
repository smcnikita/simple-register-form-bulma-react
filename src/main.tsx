import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './assets/styles/fonts.css';
import 'bulma/css/bulma.min.css';
import './assets/styles/base.css';

ReactDOM.createRoot(document.getElementById('root-app')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
