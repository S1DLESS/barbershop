import React from 'react';


const checkDate = (date) => {
    let day = new Date(date).getDate(),
        month = new Date(date).getMonth(),
        year = new Date(date).getFullYear(),
        hours = new Date(date).getHours(),
        minutes = new Date(date).getMinutes();

    if (day < 10) {
        day = `0${day}`
    }
          
    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    switch (month) {
        case 1: month = 'января'; break
        case 2: month = 'февраля'; break
        case 3: month = 'марта'; break
        case 4: month = 'апреля'; break
        case 5: month = 'мая'; break
        case 6: month = 'июня'; break
        case 7: month = 'июля'; break
        case 8: month = 'августа'; break
        case 9: month = 'сентября'; break
        case 10: month = 'октября'; break
        case 11: month = 'ноября'; break
        case 12: month = 'декабря'; break
        default: month = ''
    }

    if (date !== "") {
        return `${day} ${month} ${year} в ${hours}:${minutes}`
    } else {
        return ""
    }
}

function OrderDetails(props) {
    return (
        <>
            <div>{props.service.title}</div>
            <div>{props.barber.name}</div>
            <div>{checkDate(props.date)}</div>
            <div>{props.service.price} р.</div>
        </>
    )
}
export default OrderDetails