import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import { categoryReducer } from "./category.reducer";
import { productReducer } from "./product.reducer";
import registrationReducer from "./register.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    reg: registrationReducer,
    cat: categoryReducer,
    prod: productReducer
});

export default rootReducer;