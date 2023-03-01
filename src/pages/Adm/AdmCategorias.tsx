import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ICategoria from '../../interfaces/ICategoria'
import http from '../../service/api'

const AdmCategorias = () => {

  const [categorias, setCategorias] = useState<ICategoria[]>([])

  useEffect(() => {
    http.get<ICategoria[]>('ProductCategory')
      .then(resposta => setCategorias(resposta.data))
  }, [])

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome da Categoria</th>
          <th scope="col">Editar</th>
          <th scope="col">Excluir</th>
        </tr>
      </thead>
      <tbody>

        {categorias.map(categoria => {
          return (
            <tr>
              <td>{categoria.id}</td>
              <td>{categoria.name}</td>
              <td><Link to={`/admin/categoria/${categoria.id}`}>icone</Link></td>
              <td>icone</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default AdmCategorias