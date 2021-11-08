import React from 'react';
import ReactDOM from 'react-dom';

import Lesson10 from './Lesson10';

import reportWebVitals from './reportWebVitals';

import './index.css';
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <Lesson10 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
