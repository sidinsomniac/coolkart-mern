import { PRODUCTACTIONS } from "../actions/constants";

const initialState = {
    loading: false,
    errorMessages: {},
    products: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTACTIONS.FETCH_PRODUCTS:
            return {
                ...state,
                loading: true
            };
        case PRODUCTACTIONS.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...initialState,
                products: action.payload
            };
        case PRODUCTACTIONS.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                errorMessages: action.payload.errorMessages,
                loading: false
            };
        case PRODUCTACTIONS.ADD_PRODUCT:
            return {
                ...state,
                loading: true
            };
        case PRODUCTACTIONS.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.concat(action.payload),
                loading: false,
                errorMessages: {}
            };
        case PRODUCTACTIONS.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessages: action.payload.errorMessages
            };
        default:
            return { ...state };
    }
};