import React from 'react'
import ListaCategorias from '../../components/ListaCategorias/ListaCategorias'
import Navbar from '../../components/Navbar/Navbar'
import S from './Categoria.module.css'

const Categoria = () => {
  return (
    <div className={S.container}>
      <Navbar />
      <section className={S.section}>
        <div>
        <ListaCategorias/>
        </div>
      </section>
    </div>
  )
}

export default Categoria