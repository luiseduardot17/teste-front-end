import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BaseAdmin = () => {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Administração</span>
        </div>
        

        <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/admin/categoria">Categorias</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/admin/categoria/novo">Cadastrar categoria</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/admin/produtos">Produtos</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/admin/produtos/novo">Cadastrar Produto</Link>
        </li>
        </ul>
        </nav>

        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default BaseAdmin