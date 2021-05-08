//Import tools from Express
const { text } = require('express');
const express = require('express');
const router = express.Router();
const Task = require('../models/task');

/*
This file tasks.js defines all the routes that 
*/


/*
defines a url /tasks that when accessed, executes function that gets all of a user's tasks -- a HTML GET request
req is the request the client sends to the server
res is the response the client receives from the server

*/
router.get('/tasks', async (req, res) => {
  //res.status(500).send({ error: 'Not yet implemented!' });
  const allTasks = await Task.find({}) //use await for asynchronous programming
  const tasks = allTasks.map((t => ({ //cull unimportant fields
    id:t.id,
    text:t.text,
    day:t.day
  })))
  res.status(200).send({tasks: tasks}) //server is sending the tasks lists to client for frontend to render
  //200 HTML status code means all good
})

/*
defines a url /addTask that when accessed, adds a user-defined task to database -- a HTML POST request

*/
router.post('/addTask', async (req, res) => {
    //res.status(500).send({ error: 'Not yet implemented!' });
  const {id,text,day} = req.body //our body of request should be object with id, text, day fields -- what we send to server

  if(!text){ //validates user input -- if no text, returns error code 400 to client
    res.status(400).send({error: 'Invalid Input'})
  }
  else{
    const newTask = await Task.create({
      id: id,
      text: text,
      day: day,
    })
    res.status(200).send({task: newTask})
  }
});

//delete task from database
router.delete('/deleteTask', async (req, res) => {
    //res.status(500).send({ error: 'Not yet implemented!' });
    const {id} = req.body //only get id from body
    await Task.deleteOne({id:id})
    res.status(200).send({msg: 'Task successfully deleted!'})
});

module.exports = router; 