import { Link, Outlet } from 'react-router-dom'

const BaseAdmin = () => {
    return (
        <div>
            <nav className="navbar bg-secondary p-0">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ textDecoration: "none" }}>Navbar</Link>
                </div>
                <ul className="nav nav-tabs d-flex justify-content-center align-items-center vw-100" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <Link to="/admin/categoria" style={{ textDecoration: "none" }}><button className="nav-link active fw-bold" id="categorias" data-bs-toggle="tab" data-bs-target="#categorias-tab-pane" type="button" role="tab" aria-controls="categorias-tab-pane" aria-selected="true">Categorias</button></Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link to="/admin/categoria/novo" style={{ textDecoration: "none" }}><button className="nav-link fw-bold" id="cadastrar-categoria" data-bs-toggle="tab" data-bs-target="#cadastrar-categoria-tab-pane" type="button" role="tab" aria-controls="cadastrar-categoria-tab-pane" aria-selected="false">Cadastrar Categoria</button></Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link to="/admin/produtos" style={{ textDecoration: "none" }}><button className="nav-link fw-bold" id="produtos" data-bs-toggle="tab" data-bs-target="#produtos-tab-pane" type="button" role="tab" aria-controls="produtos-tab-pane" aria-selected="false">Produtos</button></Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link to="/admin/produtos/novo" style={{ textDecoration: "none" }}><button className="nav-link fw-bold" id="cadastrar-produtos" data-bs-toggle="tab" data-bs-target="#cadastrar-produtos-tab-pane" type="button" role="tab" aria-controls="cadastrar-produtos-tab-pane" aria-selected="false">Cadastrar Produto</button></Link>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="categorias-tab-pane" role="tabpanel" aria-labelledby="categorias" ></div>
                    <div className="tab-pane fade" id="cadastrar-categoria-tab-pane" role="tabpanel" aria-labelledby="cadastrar-categoria" ></div>
                    <div className="tab-pane fade" id="produtos-tab-pane" role="tabpanel" aria-labelledby="produtos" ></div>
                    <div className="tab-pane fade" id="cadastrar-produtos-tab-pane" role="tabpanel" aria-labelledby="cadastrar-produtos" ></div>
                </div>
            </nav>

            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default BaseAdmin