import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-16 flex align-middle items-center pl-4 text-2xl font-mono'><Link to="/">Project proposal</Link></header>
  )
}

export default Header