import API from "../../api"
import { mealTypes } from "../TYPES"

const {START_DATA} = mealTypes

const agregarAlStore = payload => ({
  type: START_DATA,
  payload
})

const traerDatos = (url1, url2, isTrue) => {
  return (dispatch) => {
    API.get(url1)
      .then(({ data: { meals } }) => {
        dispatch(agregarAlStore(meals))
      })
  }
}

export {traerDatos}