import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { traerDatos } from '../redux/actions'


const Home = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState(null)
  const { meal: { meals, categories } } = useSelector(state => state);

  useEffect(() => {
    dispatch(traerDatos("/filter.php?c=Seafood", "/categories.php", true))
  }, [])

  return (
    <div>
      <form className='focus:outline-none focus:border-none'
        onSubmit={e => {
          e.preventDefault()
          dispatch(traerDatos(`/search.php?s=${traerDatos}`))
        }
        }>
        <select onChange={e => dispatch(traerDatos(`/filter.php?c=${e.target.value}`))}>
          {categories?.map(C => <option value={C.strCategory}        >{C.strCategory}</option>)}
        </select>
        <div>
          <input type="text" name="name" placeholder='search by name' />
          <input type="submit" value="search" />
        </div>
      </form>

      <section className='grid gap-4 px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>{meals?.map(M => <section>
        <figure>
          <img src={M.strMealThumb} alt="" />
        </figure>
        <div>
          <Link to={`/${M.strMeal}`}>{M.strMeal}</Link>
        </div>
      </section>)}
      </section>
    </div>
  )
}

export default Home