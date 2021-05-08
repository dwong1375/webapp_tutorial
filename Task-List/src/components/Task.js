import React from 'react'
import EachTask from './EachTask'
const Task = ({tasklist, onDelete}) =>{
    return (
        <div>
            {tasklist.map((task) => (
            <EachTask key = {task.id} task = {task} onDelete = {onDelete}/>
            ))}
        </div>
    )
}

export default Task

