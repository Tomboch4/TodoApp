import React,{ useEffect, useState } from 'react';

const Task = ({task,index,markTaskDone}) => {

    const [isDone, setIsDone] = useState(false)


    const handleTaskDone = () =>{
        setIsDone(true)
        markTaskDone(index)
    }


    return (
        <div className="task-list">
            <li>{task}</li>
            <div className="task-complete" onClick={handleTaskDone}>             
            </div>
        </div>
    );
};

export default Task;