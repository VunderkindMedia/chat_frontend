import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Index} from './Components';
import './assets/styles/themes/main.less';
import {AppState} from './context/AppState';

ReactDOM.render(
  <React.StrictMode>
    <AppState>
      <Index />
    </AppState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
