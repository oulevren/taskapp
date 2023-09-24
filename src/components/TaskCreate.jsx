import React, { useState } from 'react'
import "../App.css"

const TaskCreate = ({onCreate}) => {

const [title,setTitle] = useState("");
const [taskDecs,setTaskDecs] = useState("");
const handleSubmit = (e) => {

    e.preventDefault();

    onCreate(title,taskDecs)
    setTitle("");
    setTaskDecs("");
};



  return (
    <div className='task-create'>
        <h3>Lütfen Task ekle</h3>
        <form className='task-form'>
            <label className='task-label'>Görev Başlık</label>
            <input 
            type="text" 
            className='task-input' 
            value={title}
             onChange={(e) => setTitle(e.target.value)}
             />
            <label className='task-label'>Task</label>
            <textarea
             className='task-input'
              rows={5} value={taskDecs}
               onChange={(e) => setTaskDecs(e.target.value)}
               ></textarea>
            <button className='task-button' onClick={handleSubmit}>Oluştur</button>
        </form>
            
    </div>
  )
}

export default TaskCreate