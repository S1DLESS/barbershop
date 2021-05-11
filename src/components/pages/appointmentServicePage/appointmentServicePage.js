import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import DB from '../../../service/service';
import {addServiceId} from '../../../redux/actions';


class AppointmentServicePage extends Component {

    db = new DB()
    state = {
        serviceList: null
    }

    componentDidMount() {
        this.db.getAllServices()
            .then(serviceList => this.setState({serviceList}));
    }

    renderItems(arr) {
        if (arr) {
            return (
                arr.map(value => {
                    return (
                        <Link to='/appointment' key={value.id}>
                            <li className="collection-item"
                                key={value.id}
                                onClick={() => this.props.addServiceId(value.id, value.title, value.price)}>{value.title}</li>
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
    addServiceId
}

export default connect(null, mapDispatchToProps)(AppointmentServicePage)