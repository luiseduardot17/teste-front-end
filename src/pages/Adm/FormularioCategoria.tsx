import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ICategoria from '../../interfaces/ICategoria'
import http from '../../service/api'

const FormularioCategoria = () => {

    const parametros = useParams()

    useEffect(()=> {
        if (parametros.id){
            http.get<ICategoria>(`ProductCategory/${parametros.id}`)
            .then(resposta => setNomeCategoria(resposta.data.name))
        }
    }, [parametros])
    

    const [nomeCategoria, setNomeCategoria] = useState('')
    const [descCategoria, setDesCategoria] = useState('')

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
            http.put(`ProductCategory/${parametros.id}`, {
            name: nomeCategoria,
            description: descCategoria
        })
        .then(() => {
            alert("Categoria atualizada com sucesso!")
        })
        } else {
            http.post('ProductCategory', {
                name: nomeCategoria,
                description: descCategoria
            })
            .then(() => {
                alert("Categoria cadastrada com sucesso!")
            })
        }

        
        

    }

    return (
        <form onSubmit={aoSubmeterForm}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput"
                    value={nomeCategoria} onChange={evento => setNomeCategoria(evento.target.value)} required />
                <label htmlFor="floatingInput">Nome da Categoria</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput"
                    value={descCategoria} onChange={evento => setDesCategoria(evento.target.value)} required />
                <label htmlFor="floatingInput">Descrição</label>
            </div>
            <button type="submit" className="btn btn-outline-primary">Salvar</button>
        </form>

    )
}

export default FormularioCategoria