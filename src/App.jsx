import Componente from "./componentes/Componente"

function App() {


  return (
    <div>
      <h1>Olá Mundo</h1>
      <Componente/>
      <MeuBotao conteudo='Numero 1'/>
      <MeuBotao conteudo='Numero 2'/>
      <MeuBotao conteudo='Numero 3'/>
    </div>

  )}

function MeuBotao(props) {
  return (
    <button>{props.conteudo}</button>
  )
}


export default App
