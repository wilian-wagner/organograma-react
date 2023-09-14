import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario'
import Time from './componentes/Time'
import Rodape from './componentes/Rodape';
function App() {
  const [colaboradores, setColaborador] = useState([])

  const times = [
    {
      nome: 'Engenharia',
      corPrimaria: '#57c278', 
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Comercial',
      corPrimaria: '#82cffa', 
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Laboratório',
      corPrimaria: '#e06b69', 
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Diretoria',
      corPrimaria: '#db6ebf', 
      corSecundaria: '#fae9f5'
    }
  ]

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaborador([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {times.map(time=> <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores = {colaboradores.filter(colaborador => colaborador.time ===time.nome)}
      />)}
      <Rodape/>

    </div>
  );
}

export default App;
