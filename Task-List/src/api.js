const DATABASE_URL = 'http://localhost:4000' //port 4000 is defined in task-list-backend/.env, use 4000 to not interfere with 3000 (our frontend)
const API_ROUTE = '/api/tasks' //prefix 

/*
This file api.js specifies how frontend makes HTTP requests to backend,
allowing for frontend to exchange data with backend
*/


export const getTasksFromDb = async () => {
    const response = await fetch(`${DATABASE_URL}${API_ROUTE}/tasks`,{
        method:'GET',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        }
    }) //send a request with this http method/header to specific url (defined in task-list-backend/routes/tasks.js)
    const data = await response.json() //response data format is defined in task-list-backend/routes/tasks.js and models/task.js
    console.log('getTasks data: ', data)
    if(!data) throw new Error('Empty response from server') //throw error if no data returned
    if(data.error) throw new Error(data.error.message) //throw error if data has error

    return data.tasks
}

export const addTaskToDb = async (task) => {
    const response = await fetch(`${DATABASE_URL}${API_ROUTE}/addTask`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body: JSON.stringify(task) //turn task into JSON string for sending data
    })
    const data = await response.json()
    console.log('addTask data: ', data)
    if(!data) throw new Error('Empty response from server') //throw error if no data returned
    if(data.error) throw new Error(data.error.message) //throw error if data has error

    return data.tasks
}

export const deleteTaskFromDb = async (id) => {
    const response = await fetch(`${DATABASE_URL}${API_ROUTE}/deleteTask`,{
        method:'DELETE',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({id:id})
    })
    const data = await response.json()
    console.log('deleteTask data: ', data)
    if(!data) throw new Error('Empty response from server') //throw error if no data returned
    if(data.error) throw new Error(data.error.message) //throw error if data has error

    return data.tasks
}