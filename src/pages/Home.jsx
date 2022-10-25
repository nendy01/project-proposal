import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { traerDatos } from '../redux/actions'


const Home = () => {
  const dispatch = useDispatch()
  const { meal } = useSelector(state => state);

  useEffect(() => {
    dispatch(traerDatos("/filter.php?c=Seafood", "/categories.php", true))
  }, [])

  return (
    <div>
      {meal?.meals?.map(M => <section>
        <img src={M.strMealThumb} alt="" />
        <h2>{M.strMeal}</h2>
      </section>)}
    </div>
  )
}

export default Home