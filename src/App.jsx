import { styled } from 'styled-components'
import EstilosGlobais from './componentes/EstilosGlobais'
import Cabecalho from './componentes/Cabecalho'

const FundoGradiente = styled.div`
  background: var(--Gradiente-fundo, linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%)); 
  width: 100%;
  min-height: 100vh;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />

    </FundoGradiente>
  )
}

export default App
