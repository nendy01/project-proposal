import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { traerDatos } from '../redux/actions'

const OneMeal = () => {

  const { mealID } = useParams()

  const { meal: { meals } } = useSelector(state => state);
  const [result] = meals;

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(traerDatos(`/search.php?s=${mealID}`))
  }, [mealID])


  return (
    <div>
      <img src={result.strMealThumb} alt="" />
    </div>
  )
}

export default OneMeal