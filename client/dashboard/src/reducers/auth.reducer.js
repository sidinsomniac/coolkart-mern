import ACTIONS from "../actions/constants";

const initialState = {};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN_USER:
            return action.payload;
        default:
            return { ...state };
    }
};

export default authReducer;