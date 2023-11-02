import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import { useSelector } from "react-redux";
import Task from "./components/Task";

const App = () => {

  const tasks = useSelector((state)=>state.taskReducer)
  const [filter,setFilter] = useState("all")

  const filteredTask = tasks.filter((task)=>{
    if (filter === "all"){
      return true
    } else if (filter === "todo" && task.status ==="todo"){
      return true
    }
    else if (filter === "done" && task.status ==="done"){
      return true
    }
    return false
  })

  return (
    <div className="app">
      <h2 className="app-title">To Do App</h2>
      <div className="container">
        <TaskForm />
        <div className="filter-container">
          <div className={`filter-button ${filter === "todo" ? "active" : ""}`} onClick={() => setFilter("todo")}>Todo</div>
          <div className={`filter-button ${filter === "done" ? "active" : ""}`} onClick={() => setFilter("done")}>Done</div>
          <div className={`filter-button ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All</div>
        </div>
        <div className="separator"></div>
        <div className="task-container">
          {filter === "all" ? (
            <div className="all-task">
              <div className="all-todo">
                {`Todo (${filteredTask.filter(task => task.status === "todo").length}) :`}
                {filteredTask
                  .filter(task => task.status === "todo")
                  .map((task, index) => (
                    <Task task={task} key={index} index={index} />
                  ))}
              </div>
              <div className="all-done">
                {`Done (${filteredTask.filter(task => task.status === "done").length}) :`}
                {filteredTask
                  .filter(task => task.status === "done")
                  .map((task, index) => (
                    <Task task={task} key={index} index={index} />
                  ))}
              </div>
            </div>
          ) : (
            <div className="task-list">
              {` ${filter === "todo" ? "Todo" : "Done"} (${filteredTask.length}) :`}
              {filteredTask.map((task, index) => (
                <Task task={task} key={index} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
