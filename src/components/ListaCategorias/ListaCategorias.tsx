import React, { useEffect, useState } from 'react'
import ICategoria from '../../interfaces/ICategoria'
import http from '../../service/api'
import Spinner from '../Spinner/Spinner'
import Categoria from './Categoria/Categoria'

const ListaCategorias = () => {

  const [categorias, setCategorias] = useState<ICategoria[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    http.get('ProductCategory')
      .then(resposta => {
        setCategorias(resposta.data)
        setLoading(true)
      })
      .catch(erro => {
        console.log(erro);
      })
  }, [])

  return (
    <section>
      {categorias.length == 0 && loading == false && <Spinner />}
      {categorias.length == 0 && loading == true && (
        <div className="d-flex justify-content-center text-center w-100">
          <h5>Nenhum resultado encontrado!</h5>
        </div>
      )}
      {categorias?.map(item => <Categoria categoria={item} key={item.id} />)}
    </section>
  )
}

export default ListaCategorias