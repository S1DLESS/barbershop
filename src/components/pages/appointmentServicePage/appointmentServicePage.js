import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import DB from '../../../service/service';
import {addService} from '../../../redux/actions';


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

    renderItems(arr) {
        if (arr) {
            return (
                arr.map(value => {
                    return (
                        <Link to='/appointment' key={value.id}>
                            <li className="collection-item"
                                key={value.id}
                                onClick={() => this.props.addService(value)}>{value.title}</li>
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
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
        }

        return (
            <ul className="collection">
                {this.renderItems(serviceList)}
            </ul>
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