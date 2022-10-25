import { combineReducers } from "redux";
import mealReducer from "./mealReducer";

const rootReducer = combineReducers({ meal: mealReducer})

export default rootReducer