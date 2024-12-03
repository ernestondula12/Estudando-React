import { useState } from "react";


function Formulario(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState(0);

    const [usuario, setUsuario] = useState({});

    function handleRegister(e){
        e.preventDefault();
        
        alert("Dados enviado com sucesso!");
        setUsuario({
            nome:nome,
            email:email,
            idade:idade
        })

    }

    return(
        <div>

            <h1>Neste Bloco Temos um formulario para praticar de conhecimento</h1>
            <form onSubmit={ handleRegister }>
                <h2>Cadastro de Usuario</h2>
                <label>Nome:</label><br/>
                <input 
                value={ nome }
                onChange={ (e) => setNome(e.target.value)}
                placeholder="Digite o seu nome"/><br/>
                <label>E-mail</label><br/>
                <input 
                value={ email }
                onChange={ (e) => setEmail(e.target.value)}
                placeholder="Digite o seu e-mail"/><br/>
                <label>Idade:</label><br/>
                <input 
                value={ idade }
                onChange={ (e) => setIdade(e.target.value)}
                placeholder="Digite a sua idade"/><br/>
                <button>Registrar</button>
            </form>

            <div>
                <span>Bem Vindo: {usuario.nome}</span><br/>
                <span>E-mail: {usuario.email}</span><br/>
                <span>Idade: {usuario.idade}</span>
            </div>
        </div>
    )

}

export default Formulario;