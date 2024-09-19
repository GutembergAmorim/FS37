import { useState } from "react";

const Estados = () => {

    const[nome, setNome] = useState("Gutemberg");
    const[idade, setIdade] = useState("28");
    
    function mudarNome(){
        if(nome === "Gutemberg"){
            setNome("João");
        setIdade(35);
        } else{
            setNome("Gutemberg");
            setIdade(28);
    }
}
    return ( 
        <>
            {nome} - {idade} <br />
            <button onClick={mudarNome}>Clique Aqui</button>
        </>
     );
}
 
export default Estados;