import { useState } from "react";
import { json } from "react-router-dom";



const BuscarCep = () => {

    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');

    async function ColetarCep(){
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        
        setEndereco(`${data.logradouro}, ${data.bairro}, ${data.localidade}, - ${data.uf}`)
    }

    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 mt-5">
                        <div className="mb-2">
                            <label htmlFor="">Digite o CEP</label>
                            <input type="text" name="cep" id="cep" className="form-control" onChange={(e) => { setCep(e.target.value)}} />
                        </div>
                        <div className="mb-2">
                            <button className="btn btn-primary btn-sm" onClick={ColetarCep}>Buscar</button>
                        </div>
                        <span>
                            <div id="cep" className="container" dangerouslySetInnerHTML={{__html: endereco}}></div>
                        </span>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BuscarCep;