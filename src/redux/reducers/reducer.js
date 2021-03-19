import { combineReducers } from "redux";
import { weatherInfor } from "./weatherReducer";

// combine reducers
const reducer = combineReducers({
    WwatherInfor: weatherInfor,
})

export default weatherInfor;