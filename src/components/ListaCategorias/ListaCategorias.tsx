import React, { useEffect, useState } from 'react'
import ICategoria from '../../interfaces/ICategoria'
import http from '../../service/api'
import Categoria from './Categoria/Categoria'

const ListaCategorias = () => {

    const [categorias, setCategorias] = useState<ICategoria[]>([])

    useEffect(()=> {
        http.get('ProductCategory')
        .then(resposta => {
            setCategorias(resposta.data)
        })
        .catch(erro => {
            console.log(erro);
        })
    }, [])
  return (
    <section><h1>Todas as categorias aqui</h1>
    {categorias?.map(item => <Categoria categoria={item} key={item.id}/>)}
    </section>
  )
}

export default ListaCategorias