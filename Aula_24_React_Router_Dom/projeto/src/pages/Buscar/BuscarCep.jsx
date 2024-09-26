import { useState } from "react";


const BuscarCep = () => {

    const [cep, setCep] = useState('');    
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');

    async function ColetarCep(){
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        
        
        setRua(`${data.logradouro}`)
        setBairro(`${data.bairro}`)
        setCidade(`${data.localidade}`)
    }

    return ( 
        <>
            <div className="container">
                <div className="row">
                    <h2>Buscar Endereco por CEP</h2>
                    <div className="col-md-4 offset-md-4 mt-5">
                        <div className="mb-2">
                            <label htmlFor="">Digite o CEP</label>
                            <input type="text" name="cep" id="cep" className="form-control" onChange={(e) => { setCep(e.target.value)}} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Rua</label>
                            <input type="text" name="rua" id="rua" className="form-control" disabled value={rua}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Numero</label>
                            <input type="text" name="numero" id="numero" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Complemento</label>
                            <input type="text" name="complemento" id="complemento" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Bairro</label>
                            <input type="text" name="bairro" id="bairro" className="form-control" disabled value={bairro} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Cidade</label>
                            <input type="text" name="cidade" id="cidade" className="form-control" disabled value={cidade} />
                        </div>
                        <div className="mb-2">
                            <button className="btn btn-primary btn-sm" onClick={ColetarCep}>Buscar</button>
                        </div>                        
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BuscarCep;