import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import {addDate} from '../../../redux/actions';


function AppointmentDatePage(props) {
    let history = useHistory();
    return (
        <>
            <h1>DatePage</h1>
            <Calendar minDate={new Date()}
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