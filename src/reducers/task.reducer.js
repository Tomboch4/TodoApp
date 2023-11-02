
import {ADD_TASK,DELETE_TASK,EDIT_STATUS,EDIT_TASK} from "../actions/task.action"

const initialState = []

export default function taskReducer (state = initialState,action){
    switch (action.type){
        case ADD_TASK :
            return [...state,action.payload]
        
        case EDIT_STATUS :
            const taskID = action.payload.id
            return state.map((task)=>{
                if(task.id===taskID){
                    if(task.status==="todo"){
                    return {...task,status:"done"}
                }else{
                    return {...task,status:"todo"}
                }
            }
                
                return task
            })
        case DELETE_TASK : 
        const idToDelete = action.payload
        return state.filter((task)=>task.id != idToDelete)    
        case EDIT_TASK : 
        const id = action.payload.data.id
        console.log(id)
        return state.map((task)=>{
            console.log(id)
            if(task.id === id)
            return{
                ...task,
                task : action.payload.editContent
            }
            else return task
        })    
         default:
            return state              
            }
    }