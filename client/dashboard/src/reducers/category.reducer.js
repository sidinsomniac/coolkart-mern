import { CATEGORYACTIONS } from "../actions/constants";

const initialState = {
    loading: false,
    errorMessages: {},
    categories: []
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORYACTIONS.FETCH_CATEGORIES:
            return {
                ...state,
                loading: true
            };
        case CATEGORYACTIONS.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                ...initialState,
                categories: action.payload
            };
        case CATEGORYACTIONS.FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                errorMessages: {},
                loading: false
            };
        default:
            return { ...state };
    }
};