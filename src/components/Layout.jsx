import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from './Header'


const Layout = () => {
  return (

    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Router>
  )
}

export default Layout