import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/task.action';
import { v4 as uuidv4 } from 'uuid';


const TaskForm = () => {
    
    const form = useRef()
    const dispatch = useDispatch()
    const id = uuidv4()

    const handleNewTask = async (e) =>{
        e.preventDefault()
        const task = {
            id:id,
            task: form.current[0].value,
            status: "todo"
        }
        dispatch(addTask(task))
        form.current.reset()
    }

    return (
        <div className='form-container'>
            <form ref={form} onSubmit={(e)=>handleNewTask(e)}>
                <input type="text" placeholder='Add new task to do' className='form-text'/>
                <input type="submit" value="ADD" className='submit-button'/>
            </form>
        </div>
    );
};

export default TaskForm;