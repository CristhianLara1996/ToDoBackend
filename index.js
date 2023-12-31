
const app = require('./app')
const db = require('./config/db')
const UserModel = require('./models/user_model')
const TodoModel = require('./models/todo_model')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world...!!!')
})

const port = 3000

app.listen(port, () => {
    console.log(`Server Listening on port http://localhost:${port}`)
})
