import React from 'react'
import ListaCategorias from '../../components/ListaCategorias/ListaCategorias'
import Navbar from '../../components/Navbar/Navbar'

const Categoria = () => {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid bg-dark-emphasis vh-100">
      <ListaCategorias/>
      </div>
      
    </div>
  )
}

export default Categoria