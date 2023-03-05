import Navbar from '../../components/Navbar/Navbar'
import S from './Home.module.css'
import cars from '../../assets/images/cars.png'

const Home = () => {
  return (
    <div className={S.container}>
      <Navbar />
      <section className={S.section}>
        <div className={S.titulo}><h1 className="display-1 text-center">Bem vindo <i className="bi bi-car-front" style={{ fontSize: 60 + "px" }}></i></h1>
          <p className="h2 text-center">Um sistema completo para controlar sua concessionária. Com ele você pode alcançar o máximo de produtividade em seus processos.</p></div>
        <div><img src={cars} className="img-fluid" alt="icones de carros" /></div>
      </section>
    </div>
  )
}

export default Home