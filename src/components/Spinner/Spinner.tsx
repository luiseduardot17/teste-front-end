import React from 'react'

const Spinner = () => {
    return (
        <div className="container-fluid p-5">
            <div className="d-flex justify-content-center">
                <div className="spinner-border me-2" role="status">
                </div><h5> Carregando...</h5>
            </div>
        </div>
    )
}

export default Spinner