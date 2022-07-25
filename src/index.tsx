import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { GlobalStyle } from './globalStyles';
import { Header } from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
