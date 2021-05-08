import Header from './components/Header'
import './App.css';
import Task from './components/Task';
import {useEffect, useState} from 'react'
import AddTask from './components/AddTask'
import { getTasksFromDb, addTaskToDb, deleteTaskFromDb } from './api';

/*
This file is all frontend stuff
*/

const App = () =>{
  const[tasklist, setTasks] = useState([]) //start with empty array to not bottleneck for loading data
  const[showAdd, setShowAdd] = useState(false)

  //populate task list after rendering
  useEffect(() => {
    (async () => { //need to create async dummy function to use await getTasksFromDb
      const tasks = await getTasksFromDb() //can't use await function within non-await useEffect
      setTasks(tasks)
    })()
  }, [])

  //Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 1000) +1
    const newTask = {id, ...task}
    setTasks([...tasklist, newTask])
    
    addTaskToDb(newTask)
  }
  //Delete Task
  const deleteTask = (id) =>{
      setTasks(tasklist.filter((task) => task.id !== id))

      deleteTaskFromDb(id)
  }
    return (
      <div className="container">
        <Header title = "Task List" onAdd = {() => setShowAdd(!showAdd)} 
        showAddTask = {showAdd}/>
        <Task tasklist = {tasklist} onDelete = {deleteTask}/>
        {showAdd && <AddTask onAdd = {addTask}/>}
      </div>
    );
}

export default App;

