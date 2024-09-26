import { useState } from "react";

const ContatoPage = () => {

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[mensagem, setMensagem] = useState('')

    return ( 
        <>
            <div className="container">
                <h4>Pagina Contato</h4>
                <form action="">
                    <div className="mb-2">
                        <label htmlFor="">Nome</label>
                        <input type="text" className="form-control" placeholder="Nome" onChange={(e) => {setName(e.target.value)}} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" className="form-control" placeholder="email" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Mensagem</label>
                        <textarea name="" id="" className="form-control" placeholder="digite o texto aqui"></textarea>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default ContatoPage;
