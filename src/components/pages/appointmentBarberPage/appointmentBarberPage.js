import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DB from '../../../service/service';


export default class AppointmentBarberPage extends Component {

    db = new DB();
    state = {
        barberList: null
    }

    componentDidMount() {
        this.db.getAllBarbers()
            .then(barberList => this.setState({barberList}));
    }

    renderItems(arr) {
        if (arr) {
            return (
                arr.map(value => {
                    return (
                        <Link to='/appointment' key={value.id}>
                            <li key={value.id}
                                onClick={() => this.props.selectedBarber(value.id)}>{value.name}</li>
                        </Link>
                    )
                })
            )
        }
    }

    render() {
        const {barberList} = this.state;

        if (!barberList) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <ul>
                {this.renderItems(barberList)}
            </ul>
        )
    }
}