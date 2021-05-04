export function addBarberId(barberId, barberName) {
    return {
        type: 'ADD_BARBER_ID',
        payload: {barberId, barberName}
    }
}

export function addServiceId(serviceId) {
    return {
        type: 'ADD_SERVICE_ID',
        payload: serviceId
    }
}