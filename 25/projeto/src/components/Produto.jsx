import { useState } from "react";

function Produto({ titulo, children, valor }) {

    const[quantidade, setQuantidade] = useState(0)

    function aumentarQuantidade() {
        setQuantidade(quantidade + 1);
    }

    function diminuirQuantidade() {
        if(quantidade > 0) {
            setQuantidade(quantidade - 1);
        }
    }

    return (
        <>
        <div className="card">
            <img src="..." class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {titulo}
                </h5>
                <p className="card-text">
                    {children}
                </p>
                <strong>
                    R$ {valor}
                </strong> <br />
                <button onClick={diminuirQuantidade} className="btn btn-primary btn-sm">-</button>
                {quantidade}
                <button onClick={aumentarQuantidade} className="btn btn-primary btn-sm">+</button>
                <br />
                <a href="#" className="btn btn-primary">
                    Adicionar no Carrinho
                </a>
            </div>
        </div>
        </>
    )
}

export default Produto;