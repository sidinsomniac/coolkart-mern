import { PRODUCTACTIONS } from "./constants";
import productServices from "../services/product.service";

export const getAllProducts = () => {
    return async dispatch => {
        dispatch({
            type: PRODUCTACTIONS.FETCH_PRODUCTS
        });
        try {
            const response = await productServices.fetchProducts();
            dispatch({
                type: PRODUCTACTIONS.FETCH_PRODUCTS_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            dispatch({
                type: PRODUCTACTIONS.FETCH_PRODUCTS_FAILURE,
                payload: {
                    errorMessages: "There was a problem in fetching the products"
                }
            });
        }
    };
};

export const addNewProduct = productDetailsForm => {
    return async dispatch => {
        dispatch({
            type: PRODUCTACTIONS.ADD_PRODUCT
        });
        try {
            await productServices.addProduct(productDetailsForm);
            dispatch({
                type: PRODUCTACTIONS.ADD_PRODUCT_SUCCESS,
                payload: {
                    name: productDetailsForm.get("name"),
                    category: productDetailsForm.get("category"),
                    price: productDetailsForm.get("price"),
                    quantity: productDetailsForm.get("quantity"),
                    description: productDetailsForm.get("description")
                }
            });
        } catch (err) {
            dispatch({
                type: PRODUCTACTIONS.ADD_PRODUCT_FAILURE,
                payload: {
                    errorMessages: err.response.data.message
                }
            });
        }
    };
};