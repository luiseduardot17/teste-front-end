import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import S from './Home.module.css'
import cars from '../../assets/images/cars.png'

const Home = () => {
  return (
    <div className={S.container}>
      <Navbar />
      <section className={S.section}>
        <div><h1 className="display-1">Bem vindo!</h1></div>
        <div><img src={cars} className="img-fluid" alt="icones de carros" /></div>
      </section>
    </div>
  )
}

export default Home