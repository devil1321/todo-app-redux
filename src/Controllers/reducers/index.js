import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import dateReducer from "./dateReducer";

export default combineReducers({
        todo:todoReducer,
        date:dateReducer
    })
