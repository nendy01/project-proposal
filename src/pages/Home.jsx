import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Meal from '../components/Meal'
import { traerDatos } from '../redux/actions'

import { BiSearchAlt } from "react-icons/bi";



const Home = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState(null)
  const { meal: { meals, categories } } = useSelector(state => state);
  useEffect(() => {
    dispatch(traerDatos("/filter.php?c=Seafood", "/categories.php", true))
  }, [])

  return (
    <div className='grow my-4'>
      <form className='flex items-center justify-center flex-col lg px-12 py-4 md:flex-row  md:justify-between'
        onSubmit={e => {
          e.preventDefault()
          dispatch(traerDatos(`/search.php?s=${name}`))
        }} autoComplete="off">
        <select onChange={e => dispatch(traerDatos(`/filter.php?c=${e.target.value}`))} className="text-white bg-slate-800 mr-2 rounded-xl">
          {categories?.map((C, i) => <option value={C.strCategory} key={i}>{C.strCategory}</option>)}
        </select>


        <div className='flex items-center	text-white ml-2'>
          <input className='focus:outline-none border-b-2 border-indigo-500 text-white 
          bg-transparent'
            type="text" name="name" placeholder='search by name' onChange={e => setName(e.target.value)} />
          <label htmlFor="search">
            <BiSearchAlt size="1.5rem" />
          </label>

          <input type="submit" value="" name='search' id='search' />
        </div>


      </form>

      <section
        className='grid gap-4 px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center '>{meals?.map((M, i) => <Meal meal={M} key={i} />)}
      </section>
    </div>
  )
}

export default Home