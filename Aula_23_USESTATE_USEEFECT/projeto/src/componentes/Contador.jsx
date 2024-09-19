import { useEffect, useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    function aumentar(){
        setContador(contador + 1);
    }

    function diminuir(){
        setContador(contador - 1);
    }

    //Executa quando o contador altera. No caso, quando o contador for maior que 20
    useEffect(() => {
        console.log(contador);
        if(contador > 20){
            alert("Você ultrapassou o limite de 20");
        }
    }, [contador])
   

    return ( 
        <>
            Contador: {contador}
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </>
     );
}
 
export default Contador;