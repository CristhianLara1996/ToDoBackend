const { deleteToDo } = require('../controllers/todo_controller')
const ToDoModel = require('../models/todo_model')
class ToDoService {
    static async create(userId, title, description) {
        const createToDo = new ToDoModel({ userId, title, description });
        return await createToDo.save();
    }
    static async getUserToDoList(userId) {
        const todoList = await ToDoModel.find({ userId })
        return todoList;
    }
    static async edit(id, title, description) {
        const query = { _id: id }
        return await ToDoModel.findOneAndUpdate(query, { title, description }, {
            new: true
        })
    }
    static async delete(id) {
        const deleted = await ToDoModel.findByIdAndDelete({ _id: id })
        return deleted;
    }
}
module.exports = ToDoService;