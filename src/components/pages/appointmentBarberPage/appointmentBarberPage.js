import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import DB from '../../../service/service';
import {addBarber} from '../../../redux/actions';


class AppointmentBarberPage extends Component {

    db = new DB();
    state = {
        barberList: null
    }

    componentDidMount() {
        this.db.getAllBarbers()
            .then(barberList => {
                if (this.props.service) {
                    this.setState({
                        barberList: barberList.filter(element => this.props.service.barber.includes(element.id))
                    })
                } else {
                    this.setState({barberList})
                }
            });
    }

    renderItems(arr) {
        if (arr) {
            return (
                arr.map(value => {
                    return (
                        <Link to='/appointment' key={value.id}>
                            <li className="collection-item"
                                key={value.id}
                                onClick={() => this.props.addBarber(value)}>{value.name}</li>
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
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
        }

        return (
            <ul className="collection">
                {this.renderItems(barberList)}
            </ul>
        )
    }
}

const mapDispatchToProps = {
    addBarber
}

const mapStateToProps = state => {
    return {
        service: state.selectedService
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentBarberPage)