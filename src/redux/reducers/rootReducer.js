const initialState = {
    selectedBarber: null,
    selectedService: null,
    selectedDate: ""
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BARBER_ID":
            return {...state, selectedBarber: action.payload}
        case "ADD_SERVICE_ID":
            return {...state, selectedService: action.payload}
        default: return state
    }
}

export default rootReducer