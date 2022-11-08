import { combineReducers } from "redux";
import authReducer from './auth'
import currentUserReducer from './currentUser'
import adoptReducer from "./adopt";
import donateReducer from "./donate";

export default combineReducers({
    authReducer, currentUserReducer, adoptReducer, donateReducer
})