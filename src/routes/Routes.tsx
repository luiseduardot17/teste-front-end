import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Routes as Switch } from 'react-router-dom'
import Categoria from '../pages/Categoria/Categoria'
import Home from '../pages/Home/Home'

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route path='/' element={<Home/>}/>
        <Route path='/categoria' element={<Categoria/>}/>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes