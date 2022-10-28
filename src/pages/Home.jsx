import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Meal from '../components/Meal'
import { traerDatos } from '../redux/actions'

import { BiSearchAlt } from "react-icons/bi";
import Select from '../components/Select'
import Cs from '../components/Cs'



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

        <Select categories={categories} dispatch={dispatch} traerDatos={traerDatos} />


        <div className='flex items-center	text-white ml-2 mt-2 lg:mt-0'>

          <input className='focus:outline-none border-b-2 border-indigo-500 text-white 
          bg-transparent p-1'
            type="text" name="name" placeholder='Search by name' onChange={e => setName(e.target.value)} />
          <label htmlFor="search" className=' cursor-pointer p-2'>
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