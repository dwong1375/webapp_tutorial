const mongoose = require('mongoose')

//creates schema, the way task data should be structured
//this is how frontend and backend will exchange data -- schema defines data format
const TaskSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    text:{
        type: String,
        required: true,
    },
    day:{
        type: String,
        required: false,
    }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task