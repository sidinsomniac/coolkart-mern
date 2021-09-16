import jwt from "jsonwebtoken";
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
    errorMessages: '',
    authenticated: false
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
                errorMessages: {},
                authenticated: true
            };
        case ACTIONS.LOGIN_FAILURE:
            window.localStorage.removeItem("userToken");
            return {
                ...state,
                ...initialState,
                errorMessages: action.payload.errorMessages
            };
        case ACTIONS.USER_LOGGED_IN:
            const token = window.localStorage.getItem("userToken");
            const decodedToken = jwt.decode(token, "LORDOFTHERINGS");
            const user = decodedToken?.user;
            if (user?.username)
                return {
                    ...state,
                    authenticated: true,
                    user,
                    token: token
                };
            else return { ...state };
        case ACTIONS.LOGOUT_USER:
            window.localStorage.removeItem("userToken");
            return {
                ...state,
                ...initialState
            };
        default:
            return { ...state };
    }
};

export default authReducer;