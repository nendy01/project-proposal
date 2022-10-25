import API from "../../api"
import { mealTypes } from "../TYPES"

const {START_DATA} = mealTypes

const agregarAlStore = payload => ({
  type: START_DATA,
  payload
})

const traerDatos = (url1, url2, isTrue) => {
  if (isTrue) {
    return (dispatch) => {
      Promise.all([API.get(url1), API.get(url2)])
        .then(([data1, data2]) => {
          //
          const {data:dataOne} = data1
          const { data: dataTwo } = data2
          //
          const { meals } = dataOne
          const { categories } = dataTwo
          
          dispatch(agregarAlStore({meals,categories}))
        })
  }
  }
  return (dispatch) => {
    API.get(url1)
      .then(({ data: { meals }, data }) => {
        console.log(data);
        dispatch(agregarAlStore({ meals }))
        
      })
  }
}

export {traerDatos}