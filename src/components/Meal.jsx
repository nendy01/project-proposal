import React from 'react'
import { Link } from 'react-router-dom'

const Meal = ({ meal: { strMealThumb, strMeal } }) => {
  return (
    <section
      className='flex justify-between items-center w-full h-40 py-2 px-4
            bg-opacity-25 backdrop-filter backdrop-blur-lg bg-slate-800
            rounded-2xl
            '>
      <figure className=''>
        <img src={strMealThumb} alt="" className='w-28 rounded-full max-w-none' />
      </figure>
      <div className='py-2 h-full grow flex justify-between items-center flex-col py-2'>
        <h2 className='text-center mb-1'>{strMeal}</h2>
        <Link to={`/${strMeal}`} className="px-4 py-1 bg-slate-800 mt-1 rounded">Ver</Link>
      </div>
    </section>
  )
}

export default Meal