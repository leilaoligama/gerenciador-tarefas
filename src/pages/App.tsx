import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista/index';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  // const [tarefas, setTarefas] = useState(
  //   [
  //     {tarefa: 'React', tempo: '02:00:00'}, 
  //     {tarefa: 'JavaScript', tempo: '01:00:00'},
  //     {tarefa: 'Typescript',tempo: '03:00:00'}
  //   ]);
  // const [tarefas, setTarefas] = useState([]);
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
