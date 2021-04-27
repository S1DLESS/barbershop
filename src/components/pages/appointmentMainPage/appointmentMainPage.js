import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ChoiceItem from '../../choiceItem/choiceItem';
import './appointmentMainPage.css';

export default class AppointmentMainPage extends Component {

    state = {
        selectedBarber: null,
        selectedService: null
    };

    render() {
        return (
            <div className="container">
                <div className="center-align">Онлайн-запись</div>
                <Link to="/appointment/barber">
                    <ChoiceItem icon={"people"} title={"Барбер"} descr={''}/>
                </Link>
                <Link to="/appointment/service">
                    <ChoiceItem icon={"content_cut"} title={"Услуга"} descr={''}/>
                </Link>
                <Link to="/appointment/date">
                    <ChoiceItem icon={"date_range"} title={"Дата и время"} descr={''}/>
                </Link>
                <button className="btn">Оформить визит</button>
            </div>
        )
    }
}