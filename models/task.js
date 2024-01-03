const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    id: Number,
    taskTypeId: String,
    taskName: String,
    taskDescription: String,
    rapist: String
})


module.exports = mongoose.model('task', TaskSchema)