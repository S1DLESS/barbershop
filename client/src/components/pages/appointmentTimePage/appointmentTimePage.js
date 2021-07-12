import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addDate} from '../../../redux/actions';
import DB from '../../../service/service';
import './appointmentTimePage.css';


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
            if (this.state.unavailableTime.some(value => i > value.startTime && i < value.endTime) || endTime - i <= this.props.service.time - 1) {
                continue;
            } else {
                arr.push(
                    <Link to='/appointment'
                          key={i}
                          className='btn atp-btn'
                          onClick={() => this.props.addDate(this.props.date.setMilliseconds(i))}>{this.formatTime(i)}
                    </Link>

                    // <Link to='/appointment' key={i}>
                    //     <button className='btn'
                    //             key={i}
                    //             onClick={() => this.props.addDate(this.props.date.setMilliseconds(i))}>{this.formatTime(i)}</button>
                    // </Link>
                )
            }
        }

        if (arr.length) {
            return arr
        } else {
            return 'Извините, на сегодня времени нет!'
        }
    }

    componentDidMount() {
        this.db.getTimePageData(this.props.barber ? this.props.barber.id : null,
                                this.props.service ? this.props.service.id : null,
                                this.props.date)
            .then(res => {
                this.setState({
                    minServiceTime: res.minServiceTime,
                    unavailableTime: res.unavailableTime
                })
            })
    }
    
    render() {

        if (!this.state.minServiceTime) {
            return (
                <>
                    <Link to="/appointment/date" className="btn"><i className="material-icons left">arrow_back</i>Назад</Link>
                    <h5 className="center-align">Время</h5>
                    <div className="progress abp-container">
                        <div className="indeterminate"></div>
                    </div>
                </>
            )} else {
            return (
                <>
                    <Link to="/appointment/date" className="btn"><i className="material-icons left">arrow_back</i>Назад</Link>
                    <h5 className="center-align">Время</h5>
                    <div className="row atp-container">{this.renderButtons()}</div>
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