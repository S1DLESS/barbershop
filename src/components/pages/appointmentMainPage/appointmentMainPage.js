import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import ChoiceItem from '../../choiceItem/choiceItem';
import './appointmentMainPage.css';

class AppointmentMainPage extends Component {
    
    render() {

        const checkBarber = () => {
            if (this.props.barber !== null) {
                return this.props.barber.barberName
            } else {
                return ""
            }
        }

        const checkService = () => {
            if (this.props.service !== null) {
                return this.props.service.serviceTitle
            } else {
                return ""
            }
        }

        return (
            <div className="container">
                <div className="center-align">Онлайн-запись</div>
                <Link to="/appointment/barber">
                    <ChoiceItem icon={"people"} title={"Барбер"} descr={checkBarber()}/>
                </Link>
                <Link to="/appointment/service">
                    <ChoiceItem icon={"content_cut"} title={"Услуга"} descr={checkService()}/>
                </Link>
                <Link to="/appointment/date">
                    <ChoiceItem icon={"date_range"} title={"Дата и время"} descr={''}/>
                </Link>
                <button className="btn">Оформить визит</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        barber: state.selectedBarber,
        service: state.selectedService
    }
}

export default connect(mapStateToProps, null)(AppointmentMainPage)