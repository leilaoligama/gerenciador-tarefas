import React, { useState } from 'react';
import Item from './Item';
import style from './Lista.module.scss';

function Lista() {
  const [tarefas, setTarefas] = useState(
    [
      {tarefa: 'React', tempo: '02:00:00'}, 
      {tarefa: 'JavaScript', tempo: '01:00:00'},
      {tarefa: 'Typescript',tempo: '03:00:00'}
    ]
  );
  return (
    <aside className={style.listaTarefas}>
      <h2
        // { 
        //   () => {
        //     setTarefas(
        //       [
        //         ...tarefas, /*param1: um spread de tarefas*/
        //         { tarefa: "Estudando estado", tempo: "01:00:00" } //param 2: um objeto tarefa
        //       ] 
        //     )
        //   }
        // }
        onClick={() => setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }])}
      >
         Estudos do dia 
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index}
            tarefa={item.tarefa}
            tempo={item.tempo}
            // ou
            // {...item} //importa todas as propriedades do objeto.
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;