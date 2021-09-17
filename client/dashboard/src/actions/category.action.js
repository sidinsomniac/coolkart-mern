import categoryService from "../services/category.service";
import { CATEGORYACTIONS } from "./constants";

export const getAllCategories = () => {
    return async dispatch => {
        dispatch({
            type: CATEGORYACTIONS.FETCH_CATEGORIES
        });
        try {
            const response = await categoryService.fetchCategories();
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