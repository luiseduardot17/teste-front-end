import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Routes as Switch } from 'react-router-dom'
import AdmCategorias from '../pages/Adm/AdmCategorias'
import FormularioCategoria from '../pages/Adm/FormularioCategoria'
import Categoria from '../pages/Categoria/Categoria'
import Home from '../pages/Home/Home'

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route path='/' element={<Home/>}/>
        <Route path='/categoria' element={<Categoria/>}/>
        <Route path='/admin/categoria' element={<AdmCategorias/>}/>
        <Route path='/admin/categoria/novo' element={<FormularioCategoria/>}/>
        <Route path='/admin/categoria/:id' element={<FormularioCategoria/>}/>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes