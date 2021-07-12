const initialState = {
    selectedBarber: null,
    selectedService: null,
    selectedDate: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BARBER_ID":
            return {...state, selectedBarber: action.payload}
        case "ADD_SERVICE_ID":
            return {...state, selectedService: action.payload}
        case "ADD_DATE":
            return {...state, selectedDate: action.payload}
        case "DELETE_BARBER":
            return {...state, selectedBarber: null}
        case "DELETE_SERVICE":
            return {...state, selectedService: null}
        case "DELETE_DATE":
            return {...state, selectedDate: ''}
        default: return state
    }
}

export default rootReducer