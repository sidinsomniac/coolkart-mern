import categoryServices from "../services/category.service";
import { CATEGORYACTIONS } from "./constants";

export const getAllCategories = () => {
    return async dispatch => {
        dispatch({
            type: CATEGORYACTIONS.FETCH_CATEGORIES
        });
        try {
            const response = await categoryServices.fetchCategories();
            dispatch({
                type: CATEGORYACTIONS.FETCH_CATEGORIES_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            dispatch({
                type: CATEGORYACTIONS.FETCH_CATEGORIES_FAILURE,
                payload: {
                    errorMessages: "There was a problem in fetching the categories"
                }
            });
        }
    };
};

export const addNewCategory = categoryDetails => {
    return async dispatch => {
        dispatch({
            type: CATEGORYACTIONS.ADD_CATEGORY
        });
        try {
            const response = await categoryServices.addCategory(categoryDetails);
            dispatch({
                type: CATEGORYACTIONS.ADD_CATEGORY_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            dispatch({
                type: CATEGORYACTIONS.ADD_CATEGORY_FAILURE,
                payload: {
                    errorMessages: err.response.data.message[0]
                }
            });
        }
    };
};