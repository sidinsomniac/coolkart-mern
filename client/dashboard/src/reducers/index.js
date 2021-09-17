import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import { categoryReducer } from "./category.reducer";
import registrationReducer from "./register.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    reg: registrationReducer,
    cat: categoryReducer
});

export default rootReducer;