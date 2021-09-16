import ACTIONS from "./constants";
import authService from "../services/auth.service";

export const loginUser = user => {
    return async dispatch => {
        dispatch({ type: ACTIONS.LOGIN_USER });
        try {
            const response = await authService.loginUser({ ...user });
            dispatch({
                type: ACTIONS.LOGIN_SUCCESS,
                payload: response.data
            });
            window.localStorage.setItem("userToken", response.data?.token);
        } catch (err) {
            dispatch({
                type: ACTIONS.LOGIN_FAILURE,
                payload: {
                    errorMessages: err.response.data.message
                }
            });
            window.localStorage.removeItem("userToken");
        }
    };
};

export const registerUser = user => {
    return async dispatch => {
        dispatch({ type: ACTIONS.REGISTER_USER });
        try {
            const registrationSuccessMessage = await authService.registerUser({ ...user });
            dispatch({
                type: ACTIONS.REGISTER_SUCCESS,
                payload: {
                    message: registrationSuccessMessage.data.message
                }
            });
        } catch (err) {
            console.log({ err });
            dispatch({
                type: ACTIONS.REGISTER_FAILURE,
                payload: {
                    errorMessages: err.response.data.message
                }
            });
        }
    };
};

export const isUserLoggedIn = () => {
    return {
        type: ACTIONS.USER_LOGGED_IN
    };
};

export const logoutUser = () => {
    return {
        type: ACTIONS.LOGOUT_USER
    };
};