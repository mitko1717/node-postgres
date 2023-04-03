const Router = require('express')
const router = new Router()
const postController = require("../controller/post.controller")

// define route for every func
// first param - url, second param - function that will run by request
router.post('/post', postController.createPost)
router.get('/post', postController.getPostsByUser)

module.exports = router