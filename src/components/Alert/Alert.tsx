interface MensagemProps {
    mensagemAlerta: string
}

const Alert = ({ mensagemAlerta }: MensagemProps) => {
    return (
        <div>
            <div className="alert alert-success d-flex align-items-center fade show" role="alert" data-bs-dismiss="alert">
                <div className="w-100">
                    <i className="bi bi-check-circle-fill"></i> {mensagemAlerta}
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

        </div>
    )

}

export default Alert