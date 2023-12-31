const express = require('express')
const router = express.Router()
const ToDoController = require('../controllers/todo_controller')

router.post('/ToDo/create', ToDoController.create)
router.put('/ToDo/edit/:id', ToDoController.edit)
router.delete('/ToDo/delete/:id', ToDoController.delete)
router.get('/ToDo/userList/:userId', ToDoController.getToDoList)

module.exports = router