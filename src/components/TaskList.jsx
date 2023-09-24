import React from 'react'
import "../App.css"

const TaskList = ({tasks,onDeleteask}) => {
  return (
    <div className='task-list'>
        {tasks.map((task,index) => {
            return <div key={index} className='task-show'>
                <h3>Göreviniz</h3>
                <p>{task.title}</p>
                <h3>Yapılacakalar</h3>
                <p>{task.taskDecs}</p>
                <button className='btn-delete' onClick={() => onDeleteask(task.id)}>sil</button>
                </div> 
        })}
       
    </div>
  )
}

export default TaskList