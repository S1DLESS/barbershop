import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useHistory, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {addDate} from '../../../redux/actions';
import './appointmentDatePage.css'


function AppointmentDatePage(props) {
    let history = useHistory();
    return (
        <>
            <Link to="/appointment" className="btn"><i className="material-icons left">arrow_back</i>Назад</Link>
            <h5 className="center-align">Дата</h5>
            <Calendar className="adp-container"
                        minDate={new Date()}
                        maxDate={new Date(Date.now() + 31536000000)}
                        onClickDay={(value, event) => {
                            props.addDate(value)
                            history.push('/appointment/time');
                        }}/>
        </>
    )
}

const mapDispatchToProps = {
    addDate
}

export default connect(null, mapDispatchToProps)(AppointmentDatePage)