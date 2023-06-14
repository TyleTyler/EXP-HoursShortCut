const mongoose = require('mongoose')
const taskSchema = mongoose.Schema({
    date: {
        type: Date,
        required : true 
    },
    task:{
        type: String,
        required: true
    },
    timeIn:{
        type: Date,
        required: true
    },
    timeOut:{
        type: Date,
        required: true
    }
})

taskSchema.statics.createTask = async function(date, task, timeIn, timeOut){
    
}

module.exports = mongoose.mondel('Task', taskSchema)