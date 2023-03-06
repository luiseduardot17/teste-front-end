import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Alert from '../../../components/Alert/Alert'
import ICategoria from '../../../interfaces/ICategoria'
import http from '../../../service/api'


const FormularioCategoria = () => {

    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            http.get<ICategoria>(`ProductCategory/${parametros.id}`)
                .then(resposta => setNomeCategoria(resposta.data.name))
            http.get<ICategoria>(`ProductCategory/${parametros.id}`)
                .then(resposta => setDesCategoria(resposta.data.description))
        }
    }, [parametros])

    const [nomeCategoria, setNomeCategoria] = useState("")
    const [descCategoria, setDesCategoria] = useState("")
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()


        if (parametros.id) {
            http.put(`ProductCategory/${parametros.id}`, {
                name: nomeCategoria,
                description: descCategoria
            })
                .then(() => {
                    setMessage("Categoria atualizada com sucesso!")
                    setShowAlert(true);
                })
        } else {
            http.post<ICategoria>('ProductCategory', {
                name: nomeCategoria,
                description: descCategoria
            })
                .then(() => {
                    setMessage("Categoria cadastrada com sucesso!")
                    setShowAlert(true);
                    setNomeCategoria('');
                    setDesCategoria('');
                })
        }
    }

    return (

        <div className="container-sm w-25 position-absolute top-50 start-50 translate-middle">
            {showAlert && <Alert mensagemAlerta={message} />}
            <h3 className="text-center">Formulário de Categorias</h3>
            <form onSubmit={aoSubmeterForm} className="mb-3 d-flex flex-column">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="nome"
                        value={nomeCategoria} onChange={evento => setNomeCategoria(evento.target.value)} required />
                    <label htmlFor="floatingInput">Nome da Categoria</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="descrição"
                        value={descCategoria} onChange={evento => setDesCategoria(evento.target.value)} required />
                    <label htmlFor="floatingInput">Descrição</label>
                </div>
                <button type="submit" className="btn btn-outline-primary w-50 mx-auto">Salvar</button>
            </form>
        </div>
    )
}

export default FormularioCategoria