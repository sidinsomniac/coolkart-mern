import ACTIONS from "../actions/constants";

const initialState = {
    token: null,
    user: {
        id: "",
        username: "",
        email: "",
        role: ""
    },
    loading: false,
    errorMessage: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN_USER:
            return {
                ...state,
                loading: true
            };
        case ACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                loading: false,
                errorMessage: ''
            };
        case ACTIONS.LOGIN_FAILURE:
            return {
                ...state,
                ...initialState,
                errorMessage: action.payload.errorMessage
            };
        default:
            return { ...state };
    }
};

export default authReducer;