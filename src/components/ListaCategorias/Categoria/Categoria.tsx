import ICategoria from "../../../interfaces/ICategoria"

interface CategoriaProps {
    categoria: ICategoria
}
const Categoria = ({ categoria }: CategoriaProps) => {
  return (
    <div>
        <h3>{categoria.name}</h3>
        <h3>{categoria.description}</h3>
    </div>
  )
}

export default Categoria