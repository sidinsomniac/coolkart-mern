import { AUTHACTIONS } from "../actions/constants";

const initialState = {
    token: null,
    user: {
        id: "",
        username: "",
        email: "",
        role: ""
    },
    loading: false,
    errorMessages: {},
    authenticated: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHACTIONS.LOGIN_USER:
            return {
                ...state,
                loading: true
            };
        case AUTHACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                ...initialState,
                token: action.payload.token,
                user: action.payload.user,
                authenticated: true
            };
        case AUTHACTIONS.LOGIN_FAILURE:
            window.localStorage.removeItem("userToken");
            return {
                ...state,
                ...initialState,
                errorMessages: action.payload.errorMessages
            };
        case AUTHACTIONS.USER_LOGGED_IN:
            if (action.payload.expired)
                return {
                    ...state,
                    ...initialState,
                    errorMessages: {
                        message: "Your session has expired."
                    }
                };

            return {
                ...state,
                authenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };

        case AUTHACTIONS.LOGOUT_USER:
            return {
                ...state,
                loading: true
            };
        case AUTHACTIONS.LOGOUT_SUCCESS:
            window.localStorage.removeItem("userToken");
            return {
                ...state,
                ...initialState
            };
        case AUTHACTIONS.LOGOUT_FAILURE:
            return {
                ...state,
                errorMessages: action.payload.errorMessages
            };
        case AUTHACTIONS.REMOVE_ERROR:
            return {
                ...state,
                errorMessages: {}
            };
        default:
            return { ...state };
    }
};

export default authReducer;