import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from "./chp09/LandingPage";
import AppNumberList from "./chp10/AppNumberList";
import StudentAttendance from "./chp10/StudentAttendance";
import AppStudentAttendance from "./chp10/AppStudentAttendance";
import AttendanceCard from "./chp10/avarterAttendance/AttendanceCard";
import NameForm from "./chp11/NameForm";
import RequestForm from "./chp11/RequestForm";
import NameRequestForm from "./chp11/NameRequestForm";
import SignUp from "./chp11/SignUp";
import Calculator from "./chp12/Calculator";
import Calculator2 from "./chp12/Calculator2";
import Calculator3 from "./chp12/Calculator3";
import DistanceConverter from "./chp12/distance/DistanceConverter";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DistanceConverter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
