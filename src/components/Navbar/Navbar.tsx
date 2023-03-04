import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand"><i className="bi bi-car-front" style={{ color: "white", fontSize: 30 + "px" }}></i></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item mx-auto">
              <Link to="/" className="nav-link bg-tertiary text-light p-0">Início</Link>
            </li>
            <li className="nav-item mx-auto">
              <Link to="/categoria" className="nav-link bg-tertiary text-light p-0">Categorias</Link>
            </li>
            <li className="nav-item mx-auto">
              <Link to="/admin/categoria" className="nav-link bg-tertiary text-light p-0">Administração</Link>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link bg-tertiary text-light p-0">Acompanhamento</a>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link bg-tertiary text-light p-0">Relatórios</a>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link bg-tertiary text-light p-0">Documentos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar