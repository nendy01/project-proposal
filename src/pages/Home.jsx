import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { traerDatos } from '../redux/actions'


const Home = () => {
  const dispatch = useDispatch()
  const { meal: { meals, categories } } = useSelector(state => state);
  console.log(meals, categories);
  useEffect(() => {
    dispatch(traerDatos("/filter.php?c=Seafood", "/categories.php", true))
  }, [])

  return (
    <div>

      <select >
        {categories?.map(C => <option value={C.strCategory}>{C.strCategory}</option>)}
      </select>

      <section className='grid gap-4 px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {meals?.map(M => <section>
          <img src={M.strMealThumb} alt="" />
          <h2>{M.strMeal}</h2>
        </section>)}
      </section>
    </div>
  )
}

export default Home