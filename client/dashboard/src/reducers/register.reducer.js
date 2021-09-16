import ACTIONS from "../actions/constants";

const initialState = {
    successMessage: "",
    loading: false,
    errorMessages: {}
};

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.REGISTER_USER:
            return {
                ...state,
                loading: true
            };
        case ACTIONS.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMessages: {},
                successMessage: action.payload.message
            };
        case ACTIONS.REGISTER_FAILURE:
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