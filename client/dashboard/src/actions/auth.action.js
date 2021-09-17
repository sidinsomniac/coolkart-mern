import { AUTHACTIONS } from "./constants";
import authService from "../services/auth.service";

export const resetAuthError = () => {
    return {
        type: AUTHACTIONS.REMOVE_ERROR
    };
};

export const isUserLoggedIn = () => {
    return {
        type: AUTHACTIONS.USER_LOGGED_IN
    };
};

export const loginUser = user => {
    return async dispatch => {
        dispatch({ type: AUTHACTIONS.LOGIN_USER });
        try {
            const response = await authService.loginUser({ ...user });
            dispatch({
                type: AUTHACTIONS.LOGIN_SUCCESS,
                payload: response.data
            });
            window.localStorage.setItem("userToken", response.data?.token);
        } catch (err) {
            dispatch({
                type: AUTHACTIONS.LOGIN_FAILURE,
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
        dispatch({ type: AUTHACTIONS.REGISTER_USER });
        try {
            const registrationSuccessMessage = await authService.registerUser({ ...user });
            dispatch({
                type: AUTHACTIONS.REGISTER_SUCCESS,
                payload: {
                    message: registrationSuccessMessage.data.message
                }
            });
        } catch (err) {
            dispatch({
                type: AUTHACTIONS.REGISTER_FAILURE,
                payload: {
                    errorMessages: err.response.data.message
                }
            });
        }
    };
};

export const logoutUser = () => {
    return async dispatch => {
        dispatch({
            type: AUTHACTIONS.LOGOUT_USER
        });
        try {
            const logoutMessage = await authService.logoutUser();
            dispatch({
                type: AUTHACTIONS.LOGOUT_SUCCESS,
                payload: {
                    message: logoutMessage.data.message
                }
            });
        } catch (err) {
            dispatch({
                type: AUTHACTIONS.LOGOUT_FAILURE,
                payload: {
                    errorMessages: err.response.data.message[0]
                }
            });
        }
    };
};