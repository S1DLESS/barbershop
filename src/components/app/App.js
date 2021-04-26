import React from 'react';
import './App.css';

import ChoiceItem from '../choiceItem/choiceItem';
import BarberItem from '../barberItem/barberItem';
import ServiceItem from '../serviceItem/serviceItem';
import Calendar from '../calendar/calendar';


function App() {

    return (
        <>
            <h1>Barbershop</h1>
            <ChoiceItem/>
            <BarberItem/>
            <ServiceItem/>
            <Calendar/>
        </>
    );
}
export default App;