import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Routes as Switch } from 'react-router-dom'
import AdmCategorias from '../pages/Adm/Categorias/AdmCategorias'
import BaseAdmin from '../pages/Adm/BaseAdmin'
import FormularioCategoria from '../pages/Adm/Categorias/FormularioCategoria'
import Categoria from '../pages/Categoria/Categoria'
import Home from '../pages/Home/Home'
import AdmProdutos from '../pages/Adm/Produtos/AdmProdutos'
import FormularioProduto from '../pages/Adm/Produtos/FormularioProduto'

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route path='/' element={<Home/>}/>
        <Route path='/categoria' element={<Categoria/>}/>

        <Route path='/admin' element={<BaseAdmin/>}>
          <Route path='categoria' element={<AdmCategorias/>}/>
          <Route path='categoria/novo' element={<FormularioCategoria/>}/>
          <Route path='categoria/:id' element={<FormularioCategoria/>}/>
          <Route path='produtos' element={<AdmProdutos/>}/>
          <Route path='produtos/novo' element={<FormularioProduto/>}/>
          <Route path='produtos/:id' element={<FormularioProduto/>}/>
        </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes