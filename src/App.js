import React, { useEffect, useState } from 'react';
import Task from './components/Task';

const App = () => {
  const [newTask,setNewTask] = useState('')
  const [task, setTask] = useState([])
  const [completedTasks , setCompletedTasks] = useState([])

const markTaskDone = (index) =>{
  const completedTask = task[index]
  setCompletedTasks([...completedTasks,completedTask])
  const updatedTask = task.filter((_,i) => i !== index)
  setTask(updatedTask)
}

  const handleNewTask = (e) =>{
    e.preventDefault()
    setTask([...task,newTask])
    setNewTask('')
  }



  return (
    <div>
      <h2 className='app-title'>ToDo App</h2>
      <div className="container">
        <form className="new-task">
          <input type="text" placeholder='Add new task' id='new-task' value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
          <button className='submit' onClick={handleNewTask} >ADD</button>
        </form>
        <h2>Tasks :</h2>
        <ul className="task">
          {task.map((item,index)=>(<Task key={index} index={index} task={item} markTaskDone={markTaskDone}/>))}
        </ul>
        <h2>Completed Tasks :</h2>
        <ul className='completed-task'>
            {completedTasks.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>
        </div>
    </div>
  );
};

export default App;
