import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { traerDatos } from '../redux/actions'

import { MdOutlineKeyboardBackspace } from 'react-icons/md';

const OneMeal = () => {

  const { mealID } = useParams()
  const dispatch = useDispatch()

  const { meal: { meals } } = useSelector(state => state);
  const result = meals && meals[0];
  console.log(result);

  /* const { strArea, strMealThumb, strCategory, strYoutube, strTags, strSource
    , strMeal, strInstructions } = result */

  const tags = strTags && result.strTags.split(',')

  const ingredients = []
  for (let [ingredient, value] of Object.entries(result)) {
    if (ingredient.startsWith("strIngredient")) ingredients.push(value)
  }


  useEffect(() => {

    dispatch(traerDatos(`/search.php?s=${mealID || "Sushi"}`))

  }, [mealID])


  return (

    <div className='grow lg:grid lg:grid-cols-2 lg:gap-4 mt-4'>
      <div className="main-meal h-auto flex flex-col items-center mb-4">
        <Link to="/" className='flex items-center bg-slate-800 text-white py-2 px-4 mb-4'>
          <MdOutlineKeyboardBackspace size="1rem" />
          volver</Link>
        <img src={strMealThumb} alt="" className='w-72' />
        <h2 className='my-4 font-semibold font-serif text-2xl text-center'>{resultstrMeal}</h2>
        <div className=''>
          <a href={strYoutube} target="_blank" className='mr-2 py-2 px-4 bg-red-600 text-white'>ver video</a>
          <a href={strSource} target="_blank" className='ml-2 py-2 px-4 bg-slate-800 text-white'>ver blog</a>
        </div>
      </div>

      <div className="info-meal pl-4">
        <h3 className='text-xl mt-2'>categoria:</h3>
        <p>{strCategory}</p>
        <h3 className='text-xl mt-2'>Area:</h3>
        <p>{strArea}</p>

        {strTags && <>
          <h3 className='text-xl mt-2'>etiquetas:</h3>

          <ul className='flex flex-wrap mt-2'>
            {tags.map(T => <li className='ml-1 mt-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1  bg-slate-800 text-white rounded-full'>{T}</li>)}
          </ul>
        </>
        }

        <h3 className='text-xl mt-2'>ingredients:</h3>
        <ul className='flex flex-wrap mt-2'>
          {ingredients && ingredients.map(T => T && <li className='ml-1 mt-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-slate-800 text-white rounded-full'>{T}</li>)}
        </ul>

        <h3 className='text-xl  mt-6'>instructions:</h3>
        <p className='mt-2 mr-24'>{strInstructions}</p>
      </div>
    </div>

  )
}

export default OneMeal