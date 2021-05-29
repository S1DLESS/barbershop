import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import DB from '../../../service/service';
import {addBarber} from '../../../redux/actions';
import './appointmentBarberPage.css'


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
                        <Link to='/appointment'
                              key={value.id}
                              className="collection-item"
                              onClick={() => this.props.addBarber(value)}>{value.name}</Link>
                    )
                })
            )
        }
    }

    render() {
        const {barberList} = this.state;

        if (!barberList) {
            return (
                <>
                    <Link to="/appointment" className="btn"><i className="material-icons left">arrow_back</i>Назад</Link>
                    <h5 className="center-align">Барбер</h5>
                    <div className="progress abp-container">
                        <div className="indeterminate"></div>
                    </div>
                </>
            )
        }

        return (
            <>
                <Link to="/appointment" className="btn"><i className="material-icons left">arrow_back</i>Назад</Link>
                <h5 className="center-align">Барбер</h5>
                <div className="collection abp-container">
                    {this.renderItems(barberList)}
                </div>
            </>
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