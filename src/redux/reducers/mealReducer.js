import { mealTypes } from "../TYPES";

const {START_DATA} = mealTypes

const mealReducer = (state ={},action) => {
 
  switch (action.type) {
    case START_DATA:
      return {...state,...action.payload}
    default:
      return state
  }
}

export default mealReducer