import React from 'react';
import './style.scss'

function Lista(){

    const tarefas = [
        {tarefa: 'JavaScript', tempo: '05:00:00'},
        {tarefa: '.Net', tempo: '02:00:00'}
    ]
    
    return(
        <div className='listaTarefas'>
            <h2>Estudos do dia</h2>
            <div className='item'>
                {tarefas.map((item, index) => 
                (
                    <div key={index} className='item'>
                        <h3>{item.tarefa}</h3>
                        <p>{item.tempo}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Lista;