import { combineReducers } from "redux";
import Auth from "./AuthReducer";
import Srch from "./SearchReducer";

export default combineReducers({
    Auth,
    Srch
});