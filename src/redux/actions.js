export function addBarberId(barberId, barberName) {
    return {
        type: 'ADD_BARBER_ID',
        payload: {barberId, barberName}
    }
}

export function addServiceId(serviceId, serviceTitle) {
    return {
        type: 'ADD_SERVICE_ID',
        payload: {serviceId, serviceTitle}
    }
}

export function addDate(date) {
    return {
        type: 'ADD_DATE',
        payload: date
    }
}