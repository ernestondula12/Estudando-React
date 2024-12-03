import { useState } from "react";

function UsandoUseState(){

    const[nome, setNome] = useState("Mateus Ndula");
    const [apelido, setApelido] = useState("Miller");

    function handleChangeName(){
        setNome("Ernesto Ndula");
    }

    function handleChangeApelido(){
        setApelido("Gusta Pro");
    }

    return(
        <div>
            <h1>Trabalhando com useState para mudança de nome</h1>
            <h2>O seu nome é: { nome }</h2>
            <h3>Teu apelido é: {apelido}</h3>
            <button onClick={ handleChangeApelido }>Trocar Apelido</button><br/>
            <button onClick={ handleChangeName }>Mudar Nome</button>
        </div>
    )

}

export default UsandoUseState;