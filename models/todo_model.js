const mongoose = require('mongoose')
const UserModel = require('./user_model')
const db = require('../config/db')
const { Schema } = mongoose

const toDoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    title: {
        type: String,
        required: [true, "title is required"],
    },
    description: {
        type: String,
        required: [true, "description is required"],
    },
}, { timestamps: true })

const ToDoModel = db.model('todo', toDoSchema)
module.exports = ToDoModel