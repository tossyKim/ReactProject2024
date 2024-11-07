import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Toggle2 from "./chp08/Toggle2";
import ClickButton from "./chp08/ClickButton";
import Counter from "./chp08/Counter";
import InputTest from "./chp08/InputTest";
import ConfirmButton3 from "./chp08/ConfirmButton3";
import Library from "./chp03/Library";
import NotificationList from "./chp06/NotificationList";
import Accomodate from "./chp07/Accomodate";
import ConfirmButton from "./chp08/ConfirmButton";
import ConfirmButton4 from "./chp08/ConfirmButton4";
import CommentList from "./chp05/CommentList";
import ConfirmButtonClass from "./chp08/ConfirmButtonClass";
import Greeting from "./chp09/Greeting";
import LoginControll from "./chp09/LoginControll";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginControll/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
