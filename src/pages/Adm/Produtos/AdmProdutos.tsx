import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import IProduto from '../../../interfaces/IProduto'
import http from '../../../service/api'

const AdmProdutos = () => {
    const [produtos, setProdutos] = useState<IProduto[]>([])

    useEffect(() => {
        http.get<IProduto[]>('Product')
            .then(resposta => setProdutos(resposta.data))
    }, [])

    const excluir = (produtoQueSeraExcluido: IProduto) => {
        http.delete(`Product/${produtoQueSeraExcluido.id}`)
            .then(() => {
                alert("Produto excluido com sucesso!")
                const listaProdutos = produtos.filter(produto => produto.id !== produtoQueSeraExcluido.id)
                setProdutos([...listaProdutos])
            })
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome do Produto</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                    </tr>
                </thead>
                <tbody>

                    {produtos.map(produto => {
                        return (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.name}</td>
                                <td>{produto.description}</td>
                                <td>{produto.categoryId}</td>
                                <td><Link to={`/admin/produtos/${produto.id}`} style={{ textDecoration: "none" }}><button type="button" className="btn btn-outline-primary fw-bold"><i className="bi bi-pencil-square" ></i> Editar</button></Link></td>
                                <td><button type="button" className="btn btn-outline-danger fw-bold" onClick={() => excluir(produto)}><i className="bi bi-trash" ></i> Excluir</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AdmProdutos