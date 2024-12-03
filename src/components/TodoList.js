import {  useState, useEffect } from "react"

function TodoList(){

    //useState para vai estar atrelado ao input
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        "Estudar JavaScript",
        "Estudar Ingles"
    ]);

    //Quando aplicação for montada ela vai armazenar os dados na nossa lista de tarefa
    useEffect(() => {
        //Criando uma variavel que vai receber a nossa nova tarefa
        const tarefaStorage = localStorage.getItem('@tarefas');

        //Verificando se tem alguma coisa na nossa variavel
        if(tarefaStorage){
           setTarefas(JSON.parse(tarefaStorage))
        }
    },[])

    //Atualizando dos dados do componentes
    useEffect(() => {
        localStorage.setItem('@tarefa', JSON.stringify(tarefas))
    }, [tarefas]);

    function handleTarefa(e){
        e.preventDefault();

        setTarefas([...tarefas, input]);
        setInput('');
    }

    return(
        <div>
            <form onSubmit={ handleTarefa }>
                <h1>lISTA DE TAREFAS</h1><br/>
                <label>Nome da Tarefa</label><br/>
                <input 
                value={input}
                onChange={ (e) => setInput(e.target.value)}
                placeholder="Digite a tarefa"/><br/><br/>
                <button type="submit">Adicionar tarefa</button>
            </form>

            <br/><br/>
            <ul>
                {tarefas.map( tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default TodoList;