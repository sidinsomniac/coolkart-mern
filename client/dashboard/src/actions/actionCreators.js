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
                    errorMessage: err.message
                }
            });
            window.localStorage.removeItem("userToken");
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