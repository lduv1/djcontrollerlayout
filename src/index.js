import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Global, css } from '@emotion/core';

import App from './App';
import * as serviceWorker from './serviceWorker';


const globalStyles = css`

  body {
    margin: 0;
    overflow: hidden;
  }
`;


// document.ontouchmove = function(e) {
//   console.log("no");
//   return e.preventDefault();
// };

ReactDOM.render(
  <React.StrictMode>
      <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
