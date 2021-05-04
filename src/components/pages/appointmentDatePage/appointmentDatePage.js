import React, {Component} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


class AppointmentDatePage extends Component {
    render() {
        return (
            <>
                <h1>DatePage</h1>
                <Calendar minDate={new Date()}
                          maxDate={new Date(Date.now() + 31536000000)}
                          onClickDay={(value, event) => console.log(value)}/>
            </>
        )
    }
}

export default AppointmentDatePage