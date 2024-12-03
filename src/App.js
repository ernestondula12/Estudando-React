import { useState, useEffect } from "react";

function App(){

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Limpar a casa',
    'Almoçar'
  ])  

  useEffect(() => {
    console.log("Tarefas carregadas no localStorage: ", tarefas)
      const tarefaStorage = localStorage.getItem('@tarefa')
      if(tarefaStorage){
        setTarefas(JSON.parse(tarefaStorage));
      }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas])

  function handleTarefa(e){
    e.preventDefault();
    setTarefas([...tarefas, input.trim()]);
    setInput('')
  }

  return(
      <div>
         <form onSubmit={ handleTarefa }>
          <h1>LISTA DE TAREFAS</h1>
          <label>Nome da Tarefa:</label><br/>
          <input type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite a tarefa"/>
          <button type="submit">Adicionar Tarefa</button>
         </form>

         <ul>
            { tarefas.map(tarefa =>(
              <li key={tarefa}>{tarefa}</li>
            ))}
         </ul>
      </div>
  );
}
export default App;