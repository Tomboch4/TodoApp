export const ADD_TASK = "ADD_TASK"
export const EDIT_STATUS = "EDIT_STATUS"
export const DELETE_TASK = "DELETE_TASK"
export const EDIT_TASK = "EDIT_TASK"

export const addTask = (data) =>{
    return (dispatch) =>{
        dispatch({
            type:ADD_TASK,
            payload: data
        })
    }
}
export const editStatus = (data) =>{
    return (dispatch) =>{
        dispatch({
            type:EDIT_STATUS,
            payload: data
        })
    }
}
export const deleteTask = (id) =>{
    return (dispatch) =>{
        dispatch({
            type:DELETE_TASK,
            payload: id
        })
    }
}
export const editTask = (data,editContent) =>{
    return (dispatch) =>{
        console.log(editContent)
        dispatch({
            type:EDIT_TASK,
            payload: {data,editContent}
        })
    }
}


