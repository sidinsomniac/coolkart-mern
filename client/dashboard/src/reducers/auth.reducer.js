import jwt from "jsonwebtoken";
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
            const token = window.localStorage.getItem("userToken");
            const decodedToken = jwt.decode(token, "LORDOFTHERINGS");
            if (Date.now() >= decodedToken.exp * 1000) {
                window.localStorage.removeItem("userToken");
                document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                return {
                    ...state,
                    ...initialState,
                    errorMessages: {
                        message: "Your session has expired."
                    }
                };
            } else {
                const user = decodedToken?.user;
                return {
                    ...state,
                    authenticated: true,
                    user,
                    token
                };
            }
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