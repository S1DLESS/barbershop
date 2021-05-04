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

        return (
            <div className="container">
                <div className="center-align">Онлайн-запись</div>
                <Link to="/appointment/barber">
                    <ChoiceItem icon={"people"} title={"Барбер"} descr={checkBarber()}/>
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

const mapStateToProps = state => {
    return {
        barber: state.selectedBarber
    }
}

export default connect(mapStateToProps, null)(AppointmentMainPage)