export function addBarberId(barberId, barberName) {
    return {
        type: 'ADD_BARBER_ID',
        payload: {barberId, barberName}
    }
}

export function addServiceId(serviceId, serviceTitle, servicePrice) {
    return {
        type: 'ADD_SERVICE_ID',
        payload: {serviceId, serviceTitle, servicePrice}
    }
}

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