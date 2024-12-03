
function Nome({ aluno, idade, nome, profissao }){
    return(
      <div>
        <h1>Bem Vindo: { aluno } - idade: { idade } anos</h1>
        <h2>Trabalhando com { nome } profissional de {  profissao }</h2>
      </div>
    )
  }

  export default Nome;