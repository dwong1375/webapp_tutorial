import React from 'react'
import {useState} from 'react'
const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!text){
            alert("Task Name can't be Empty")
            return
        }
        onAdd({text, day})
        setText('')
        setDay('')
    }
    return (
        <form className = "add-form" onSubmit = {onSubmit}>
            <div className = "form-control">
                <label>Task</label>
                <input type = "text" placeholder = "Enter Task Name" 
                value = {text} onChange = {(e) => setText(e.target.value)}></input>
            </div>

            <div className = "form-control">
                <label>Date & Time</label>
                <input type = "text" placeholder = "Enter the Date & Time"
                value = {day} onChange = {(e) => setDay(e.target.value)}
                ></input>
            </div>
            <input type = "submit" value = "Add Task" className = "btn btn-block"/>
        </form>
    )
}

export default AddTask
