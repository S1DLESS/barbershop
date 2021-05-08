import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addDate} from '../../../redux/actions';


function TimePage(props) {
    let arr = [];
    for (let i = 9; i <= 20; i++) {
        arr.push(
            <Link to='/appointment' key={i}>
                <a className='btn'
                   key={i}
                   onClick={() => props.addDate(props.date.setHours(i))}>{i}:00</a>
            </Link>
        )
    }

    return (
        <>
            <h1>TimePage</h1>
            {arr}
        </>
    )
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