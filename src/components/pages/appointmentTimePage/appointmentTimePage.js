import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addDate} from '../../../redux/actions';
import DB from '../../../service/service';


function TimePage(props) {

    const db = new DB();

    function renderTime(ms) {
        const hours = Math.floor(ms/1000/60/60)
        const minutes = Math.floor(ms/(1000*60)%60)
        return `${hours}:${(minutes < 10) ? '0' + minutes : minutes}`
    }

    function render() {
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
                            onClick={() => props.addDate(props.date.setMilliseconds(i))}>{renderTime(i)}</button>
                </Link>
            )
        }
        
        return arr
    }

    // function getMinServiceTime() {
    //     console.log('getMinServiceTime function')
    //     let arr2 = []
    //     db.getAllServices().then(res => {
    //         res.forEach(value => arr2.push(value.time))
    //     });
    //     console.log(arr2)
    //     console.log('getMinServiceTime function end')
    //     // arr.forEach(value => arr2.push(value.time))
    //     // console.log(arr2.sort().shift())
    //     // return arr2.sort().shift()
    // }
    

    return (
        <>
            <h1>Время</h1>
            {render()}
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