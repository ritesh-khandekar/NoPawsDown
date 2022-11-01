import { combineReducers } from "redux";
import authReducer from './auth'
import currentUserReducer from './currentUser'
import adoptReducer from "./adopt";

export default combineReducers({
    authReducer, currentUserReducer, adoptReducer
})