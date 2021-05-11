import React, {Component} from 'react';
import { connect } from 'react-redux';
import OrderDetails from '../../orderDetails/orderDetails';
import OrderMain from '../../orderMain/orderMain';


class OrderPage extends Component {
    render() {
        return (
            <>
                <h1>OrderPage</h1>
                <ul className="tabs tabs-fixed-width tab-demo z-depth-1">
                    <li className="tab"><a href="#">Записаться</a></li>
                    <li className="tab"><a href="#">Детали заказа</a></li>
                </ul>
                <OrderMain barber={this.props.barber}
                           service={this.props.service}
                           date={this.props.date}/>
                <OrderDetails barber={this.props.barber}
                              service={this.props.service}
                              date={this.props.date}/>
            </>
        )
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