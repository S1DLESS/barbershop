import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import DB from '../../../service/service';
import {addService} from '../../../redux/actions';
import './appointmentServicePage.css';


class AppointmentServicePage extends Component {

    db = new DB()
    state = {
        serviceList: null
    }

    componentDidMount() {
        this.db.getAllServices()
            .then(serviceList => {
                if (this.props.barber) {
                    this.setState({
                        serviceList: serviceList.filter(element => element.barber.includes(this.props.barber.id))
                    })
                } else {
                    this.setState({serviceList})
                }
            });
    }

    formatTime(ms) {
        const hours = Math.floor(ms/1000/60/60)
        const minutes = Math.floor(ms/(1000*60)%60)
        if (ms < 3600000) {
            return `${minutes} мин.`
        } else if (ms % 3600000 === 0) {
            return `${hours} ч.`
        } else if (ms % 3600000 !== 0) {
            return `${hours} ч. ${minutes} мин.`
        }
    }

    renderItems(arr) {
        if (arr) {
            return (
                arr.map(value => {
                    return (
                        <Link to='/appointment'
                              key={value.id}
                              className="collection-item"
                              onClick={() => this.props.addService(value)}>
                            <span className="badge">{this.formatTime(value.time)}</span>
                            {value.title}
                        </Link>
                    )
                })
            )
        }
    }
    
    render() {
        const {serviceList} = this.state;

        if (!serviceList) {
            return (
                <>
                    <Link to="/appointment" className="btn"><i className="material-icons left">arrow_back</i>Назад</Link>
                    <h5 className="center-align">Услуга</h5>
                    <div className="progress asp-container" style={{margin: '0 auto'}}>
                        <div className="indeterminate"></div>
                    </div>
                </>
            )
        }

        return (
            <>
                <Link to="/appointment" className="btn"><i className="material-icons left">arrow_back</i>Назад</Link>
                <h5 className="center-align">Услуга</h5>
                <div className="collection asp-container" style={{margin: '0 auto'}}>
                    {this.renderItems(serviceList)}
                </div>
            </>
        )
    }
}

const mapDispatchToProps = {
    addService
}

const mapStateToProps = state => {
    return {
        barber: state.selectedBarber
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentServicePage)