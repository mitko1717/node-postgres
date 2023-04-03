const Router = require('express')
const router = new Router()
const userController = require("../controller/user.controller")

// define route for every func
// first param - url, second param - function that will run by request
router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

module.exports = router