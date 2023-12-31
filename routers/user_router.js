const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user_controller')

router.post('/user/register', UserController.register)
router.post('/user/login', UserController.login)

module.exports = router