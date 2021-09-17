import { AUTHACTIONS } from "../actions/constants";

const initialState = {
    successMessage: "",
    loading: false,
    errorMessages: {}
};

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHACTIONS.REGISTER_USER:
            return {
                ...state,
                loading: true
            };
        case AUTHACTIONS.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMessages: {},
                successMessage: action.payload.message
            };
        case AUTHACTIONS.REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessages: action.payload.errorMessages,
                successMessage: ""
            };
        default:
            return { ...state };
    }
};

export default registrationReducer;