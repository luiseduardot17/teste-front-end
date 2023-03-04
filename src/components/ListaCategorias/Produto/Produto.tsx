import IProduto from '../../../interfaces/IProduto'

interface ProdutoProps {
    produto: IProduto
}

const Produto = ({ produto }: ProdutoProps) => {
    return (
        <div>
            <div>
                <h3>{produto.name}</h3>
            </div>
            <div>
                <h3>{produto.description}</h3>
            </div>
        </div>
    )
}

export default Produto