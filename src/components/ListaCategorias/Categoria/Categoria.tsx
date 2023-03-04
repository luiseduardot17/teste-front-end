import { useEffect, useState } from "react"
import ICategoria from "../../../interfaces/ICategoria"
import IProduto from "../../../interfaces/IProduto"
import http from "../../../service/api"
import Produto from "../Produto/Produto"

interface CategoriaProps {
  categoria: ICategoria
  produto: IProduto
}
const Categoria = ({ categoria, produto }: CategoriaProps) => {

  const [produtos, setProdutos] = useState<IProduto[]>()
  
  // useEffect(() => {
  //   http.get<IProduto[]>(`Product/${produto.id}`)
  //     .then(resposta => {
  //       setProdutos(resposta.data)
  //     })
  // }, [categoria.id])

  return (
    <div>
      <div className="container-sm bg-secondary">
        <h3>ID {categoria.id} - {categoria.name}</h3>
      </div>
      <div>
        {produtos?.map(item => <Produto produto={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default Categoria