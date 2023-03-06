import { useEffect, useState } from "react"
import ICategoria from "../../../interfaces/ICategoria"
import IProduto from "../../../interfaces/IProduto"
import http from "../../../service/api"
import Produto from "../Produto/Produto"

interface CategoriaProps {
  categoria: ICategoria
}
const Categoria = ({ categoria }: CategoriaProps) => {

  const [produtos, setProdutos] = useState<IProduto[]>()

  useEffect(() => {
    http.get<IProduto[]>(`Product`)
      .then(resposta => {
        const listaProdutos = resposta.data.filter(produto => produto.name && produto.categoryId)
        setProdutos([...listaProdutos])
      })
  }, [])

  return (
    
      <div className="container-sm bg-secondary mb-4 border border-secondary rounded">
        <h3>{categoria.name}</h3>
        {produtos?.map(item => item.categoryId == categoria.id ? <Produto produto={item.name} quantidade={item.minPuchaseQuantity} key={item.id}/> : null)}
      </div>
    
  )
}

export default Categoria