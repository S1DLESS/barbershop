export function addBarber(barber) {
    return {
        type: 'ADD_BARBER_ID',
        payload: barber
    }
}
//barberId, barberName

export function addService(service) {
    return {
        type: 'ADD_SERVICE_ID',
        payload: service
    }
}
//serviceId, serviceTitle, servicePrice

export function addDate(date) {
    return {
        type: 'ADD_DATE',
        payload: date
    }
}

export function deleteBarber() {
    return {
        type: 'DELETE_BARBER'
    }
}

export function deleteService() {
    return {
        type: 'DELETE_SERVICE'
    }
}

export function deleteDate() {
    return {
        type: 'DELETE_DATE'
    }
}