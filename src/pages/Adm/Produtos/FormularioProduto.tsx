import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ICategoria from '../../../interfaces/ICategoria'
import http from '../../../service/api'

const FormularioProduto = () => {

    const parametros = useParams()

    const [nomeProduto, setNomeProduto] = useState('')
    const [descProduto, setDesProduto] = useState('')
    const [categoria, setCategoria] = useState('')
    const [categorias, setCategorias] = useState<ICategoria[]>([])


    useEffect(() => {

        http.get<ICategoria[]>('ProductCategory')
            .then(resposta => setCategorias(resposta.data))

    }, [])

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (parametros.id) {
            http.put(`Product/${parametros.id}`, {
                name: nomeProduto,
                description: descProduto,
                productCategory: categoria
            })
                .then(() => {
                    alert("Produto atualizado com sucesso!")
                    setNomeProduto('')
                    setDesProduto('')
                    setCategoria('')
                })
                .catch(erro => console.log(erro))
        } else {
            http.post('Product', {
                name: nomeProduto,
                description: descProduto,
                productCategory: categoria
            })
                .then(() => {
                    alert("Produto cadastrado com sucesso!")
                    setNomeProduto('')
                    setDesProduto('')
                    setCategoria('')
                })
                .catch(erro => console.log(erro))
        }
    }

    return (

        <div className="container-sm w-25 position-absolute top-50 start-50 translate-middle">
            <h3 className="text-center">Formulário de Produtos</h3>
            <form onSubmit={aoSubmeterForm} className="mb-3 d-flex flex-column">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Peças pós venda"
                        value={nomeProduto} onChange={evento => setNomeProduto(evento.target.value)} required />
                    <label htmlFor="floatingInput">Nome do Produto</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Recurso de garantia"
                        value={descProduto} onChange={evento => setDesProduto(evento.target.value)} required />
                    <label htmlFor="floatingInput">Descrição</label>
                </div>

                <div className="form-floating mb-3">
                    <select className="form-select mb-3" aria-label="select-category" value={categoria} onChange={evento => setCategoria(evento.target.value)} required>
                        <option></option>
                        {categorias.map(categoria =>
                            <option key={categoria.id} value={categoria.name}>
                                {categoria.name}
                            </option>)}
                    </select>
                    <label htmlFor="floatingInput">Categoria</label>
                </div>
                <button type="submit" className="btn btn-outline-primary w-50 mx-auto">Salvar</button>
            </form>
        </div>
    )
}

export default FormularioProduto