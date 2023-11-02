import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editStatus, editTask } from '../actions/task.action';

const Task = ({task,index}) => {
    const dispatch = useDispatch()
    const [editToggle,setEditToggle] = useState(false)
    const [editContent,setEditContent] = useState(task.task)

    const handleStatus = ()=>{
            dispatch(editStatus(task))
    }

    const handleEdit = (e) =>{
        e.preventDefault()
        dispatch(editTask(task,editContent))
        setEditToggle(false)
    }

    const handleToDelete = ()=>{
        dispatch(deleteTask(task.id))
    }

    return (
        <div className='task'>
            <div className="change-status" onClick={handleStatus}>
                {
                    task.status ==="todo" ? <div className='checkbox'></div> : <img src="./icons/checkedcoche.png" alt="checked box status" className='checkedbox'/>
                }
            </div>
            {editToggle ? (
                <form onSubmit={e => handleEdit(e)} className='editable'>
                    <input type="text" className='editable-text' autoFocus={true} defaultValue={task.task} onChange={e => setEditContent(e.target.value)} />
                    <input type="submit" value="Modify" className='editsubmit'/>
                </form>
            ):(
                <div className="task-text">
                {task.task}
                </div>
            )}
            
        <div className="edit-delete">
            <img src="./icons/edit.svg"
          alt="edit"
          onClick={()=>setEditToggle(!editToggle)}/>
            <img src="./icons/delete.svg"
          alt="delete"
          onClick={handleToDelete}
          />
        </div>
        </div>
    );
};

export default Task;