import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addDate} from '../../../redux/actions';
import DB from '../../../service/service';


class TimePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            minServiceTime: null,
            unavailableTime: {}
        }
        this.db = new DB();
    }
    

    formatTime(ms) {
        const hours = Math.floor(ms/1000/60/60)
        const minutes = Math.floor(ms/(1000*60)%60)
        return `${hours}:${(minutes < 10) ? '0' + minutes : minutes}`
    }

    renderButtons() {
        let arr = [];
        const startTime = 32400000,
              endTime = 75600000,
              minServiceTime = this.state.minServiceTime,
              interval = 900000;
    
        for (let i = startTime; i <= endTime - minServiceTime; i += interval) {
            if (this.state.unavailableTime.some(value => i >= value.startTime && i < value.endTime)) {
                continue
            }

            arr.push(
                <Link to='/appointment' key={i}>
                    <button className='btn'
                            key={i}
                            onClick={() => this.props.addDate(this.props.date.setMilliseconds(i))}>{this.formatTime(i)}</button>
                </Link>
            )
        }
        return arr
    }

    componentDidMount() {
        this.db.getTimePageData(this.props.barber.id, this.props.service.id, this.props.date)
            .then(res => {
                this.setState({
                    minServiceTime: res.minServiceTime,
                    unavailableTime: res.unavailableTime
                })
            })
    }
    
    render() {
        console.log(this.state)

        if (!this.state.minServiceTime) {
            return <div>Loading...</div>
        } else {
            return (
                <>
                    <h1>Время</h1>
                    {this.renderButtons()}
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

const mapDispatchToProps = {
    addDate
}

export default connect(mapStateToProps, mapDispatchToProps)(TimePage);