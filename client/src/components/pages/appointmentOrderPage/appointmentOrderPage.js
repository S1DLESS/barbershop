import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import OrderDetails from '../../orderDetails/orderDetails';
import OrderMain from '../../orderMain/orderMain';
import './appointmentOrderPage.css'


class OrderPage extends Component {

    render() {
        if (this.props.barber && this.props.service && this.props.date) {
            return (
                <>
                    <Link to="/appointment" className="btn"><i className="material-icons left">arrow_back</i>Назад</Link>
                    <h5 className="center-align">Оформление</h5>
                    <div className="container row">
                        <div className='col s7'>
                            <OrderMain barber={this.props.barber}
                                service={this.props.service}
                                date={this.props.date}/>
                        </div>
                        <div className="col s5">
                        <OrderDetails barber={this.props.barber}
                                  service={this.props.service}
                                  date={this.props.date}/>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <Link to="/appointment" className="btn"><i className="material-icons left">arrow_back</i>Назад</Link>
                    <div>No Data!</div>
                </>
            ) 
        }
    }
}

const mapStateToProps = state => {
    return {
        barber: state.selectedBarber,
        service: state.selectedService,
        date: state.selectedDate
    }
}

export default connect(mapStateToProps, null)(OrderPage)