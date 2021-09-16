import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import registrationReducer from "./register.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    reg: registrationReducer
});

export default rootReducer;