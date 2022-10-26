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
    <div className='grow'>
      <form className='flex px-12 py-4  justify-between'
        onSubmit={e => {
          e.preventDefault()
          dispatch(traerDatos(`/search.php?s=${name}`))
        }
        }>
        <select onChange={e => dispatch(traerDatos(`/filter.php?c=${e.target.value}`))} className="text-white bg-slate-800">
          {categories?.map(C => <option value={C.strCategory}        >{C.strCategory}</option>)}
        </select>
        <div>
          <input className='focus:outline-none border-b-2 border-indigo-500'
            type="text" name="name" placeholder='search by name' onChange={e => setName(e.target.value)} />
          <input type="submit" value="search" className='ml-2 p-0.5 border-2 border-indigo-500' />
        </div>
      </form>

      <section
        className='grid gap-4 px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center '>{meals?.map(M =>
          <section
            className='flex justify-between items-center w-full h-40 py-2 px-4
            bg-opacity-25 backdrop-filter backdrop-blur-lg bg-slate-800
            '>
            <figure className=''>
              <img src={M.strMealThumb} alt="" className='w-28 rounded-full max-w-none' />
            </figure>
            <div className='py-2 h-full grow flex justify-between items-center flex-col py-2'>
              <h2 className='text-center mb-1'>{M.strMeal}</h2>
              <Link to={`/${M.strMeal}`} className="px-4 py-2 bg-gray-400 mt-1">ver</Link>
            </div>
          </section>)}
      </section>
    </div>
  )
}

export default Home