import { mealTypes } from "../TYPES";

const {DATA_MEAL,START_DATA} = mealTypes

const mealReducer = (state ={},action) => {
 
  switch (action.type) {
    case START_DATA:
      return {meals:action.payload}
    default:
      return state
  }
}

export default mealReducer