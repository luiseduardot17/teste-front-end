import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ICategoria from '../../../interfaces/ICategoria'
import http from '../../../service/api'

const AdmCategorias = () => {

  const [categorias, setCategorias] = useState<ICategoria[]>([])

  useEffect(() => {
    http.get<ICategoria[]>('ProductCategory')
      .then(resposta => setCategorias(resposta.data))
  }, [])


  const excluir = (categoriaQueSeraExcluida: ICategoria) => {
    http.delete(`ProductCategory/${categoriaQueSeraExcluida.id}`)
      .then(() => {
        alert("Categoria excluida com sucesso!")
        const listaCategoria = categorias.filter(categoria => categoria.id !== categoriaQueSeraExcluida.id)
        setCategorias([...listaCategoria])
      })
      .catch(erro => console.log(erro))
  }

  return (
    <div>
      <table className="table text-center">
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
              <tr key={categoria.id}>
                <td>{categoria.id}</td>
                <td>{categoria.name}</td>
                <td><Link to={`/admin/categoria/${categoria.id}`} style={{ textDecoration: "none" }}><button type="button" className="btn btn-outline-primary fw-bold"><i className="bi bi-pencil-square" ></i> Editar</button></Link></td>
                <td><button type="button" className="btn btn-outline-danger fw-bold" onClick={() => excluir(categoria)}><i className="bi bi-trash" ></i> Excluir</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AdmCategorias