import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AppointmentBarberPage from '../pages/appointmentBarberPage/appointmentBarberPage';
import AppointmentMainPage from '../pages/appointmentMainPage/appointmentMainPage';
import AppointmentServicePage from '../pages/appointmentServicePage/appointmentServicePage';
import AppointmentDatePage from '../pages/appointmentDatePage/appointmentDatePage';
import AppointmentTimePage from '../pages/appointmentTimePage/appointmentTimePage';
import AppointmentOrderPage from '../pages/appointmentOrderPage/appointmentOrderPage';
import HomePage from '../pages/homePage/homePage';
import './App.css';


export default function App() {

    return (
        <Router>
            <Route path='/' exact component={HomePage}></Route>
            <Route path='/appointment' exact component={AppointmentMainPage}></Route>
            <Route path='/appointment/barber' component={AppointmentBarberPage}></Route>
            <Route path='/appointment/service' component={AppointmentServicePage}></Route>
            <Route path='/appointment/date' component={AppointmentDatePage}></Route>
            <Route path='/appointment/time' component={AppointmentTimePage}></Route>
            <Route path='/appointment/order' component={AppointmentOrderPage}></Route>
        </Router>
    );
}