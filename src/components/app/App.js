import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import AppointmentBarberPage from '../pages/appointmentBarberPage/appointmentBarberPage';
import AppointmentMainPage from '../pages/appointmentMainPage/appointmentMainPage';
import HomePage from '../pages/homePage/homePage';
import './App.css';


export default function App() {

    return (
        <Router>
            <Redirect from='/' to='/home'/>
            <Route path='/home' component={HomePage}></Route>
            <Route path='/appointment' exact component={AppointmentMainPage}></Route>
            <Route path='/appointment/barber' component={AppointmentBarberPage}></Route>
        </Router>
    );
}