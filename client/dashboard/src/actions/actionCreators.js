import ACTIONS from "./constants";

export const loginUser = user => {
    return async dispatch => {
        dispatch({
            type: ACTIONS.LOGIN_USER,
            payload: user
        });
    };
};