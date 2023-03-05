
interface ProdutoProps {
    produto: string
    quantidade: number
}

const Produto = ({ produto, quantidade }: ProdutoProps) => {
    return (
        <div className="container-fluid d-flex justify-content-start">
            <ul className="list-group w-100">
                <li className="list-group-item m-1"><strong>QTD: {quantidade} </strong>|  {produto}</li>
            </ul>
        </div>
    )
}

export default Produto