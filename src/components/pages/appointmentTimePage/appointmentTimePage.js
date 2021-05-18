import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addDate} from '../../../redux/actions';
import DB from '../../../service/service';


class TimePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mstLoaded: false
        }
    }
    db = new DB();

    formatTime(ms) {
        const hours = Math.floor(ms/1000/60/60)
        const minutes = Math.floor(ms/(1000*60)%60)
        return `${hours}:${(minutes < 10) ? '0' + minutes : minutes}`
    }

    renderButtons() {
        let arr = [];
        const startTime = 32400000,
              endTime = 75600000,
              minServiceTime = 1800000,
              interval = 900000;
    
        for (let i = startTime; i <= endTime - minServiceTime; i += interval) {
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

    getMinServiceTime() {
        this.db.getAllServices().then(res => {
            // res.map(value => value.time).sort()[0]
            console.log(res)
            this.setState({mstLoaded: true})
        })
    }

    
    render() {

        if (this.state.mstLoaded) {
            return (
                <>
                    <h1>Время</h1>
                    {this.renderButtons()}
                </>
            )
        } else {
            this.getMinServiceTime()
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        date: state.selectedDate
    }
}

const mapDispatchToProps = {
    addDate
}

export default connect(mapStateToProps, mapDispatchToProps)(TimePage);