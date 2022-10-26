import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Notfound from '../pages/404'
import Home from '../pages/Home'
import OneMeal from '../pages/OneMeal'
import Footer from './Footer'
import Header from './Header'


const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>

        <Route index exact element={<Home />} />
        <Route path='/:mealID' element={<OneMeal />} />
        <Route path='*' element={<Notfound />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default Layout