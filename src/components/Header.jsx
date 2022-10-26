import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-16 bg-slate-800 flex align-middle items-center pl-4 text-2xl font-mono'><Link to="/">home</Link></div>
  )
}

export default Header