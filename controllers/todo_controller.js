const ToDoService = require('../services/todo_service')

exports.create = async (req, res, next) => {
    try {
        const { userId, title, description } = req.body
        const result = await ToDoService.create(userId, title, description)
        res.status(200).json({ status: true, message: 'ToDo registered successfully', data: result })
    } catch (e) {
        console.log("---> err -->", e);
        next(e);
    }
}

exports.getToDoList = async (req, res, next) => {
    try {
        const { userId } = req.params
        console.log("---> userId -->", userId);
        const result = await ToDoService.getUserToDoList(userId)
        res.status(200).json({ status: true, message: 'ToDoList', data: result })
    } catch (e) {
        console.log("---> err -->", e);
        next(e);
    }
}

exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await ToDoService.delete(id)
        res.status(200).json({ status: true, message: 'ToDo deleted successfully', data: result })
    } catch (e) {
        console.log("---> err -->", e);
        next(e);
    }
}

exports.edit = async (req, res, next) => {
    try {
        const { id } = req.params
        const { title, description } = req.body
        const result = await ToDoService.edit(id, title, description)
        res.status(200).json({ status: true, message: 'ToDo updated successfully', data: result })
    } catch (e) {
        console.log("---> err -->", e);
        next(e);
    }
}