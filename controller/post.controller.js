const db = require('../db')

class PostController {
    async createPost(req, res) {
        // POST http://localhost:8080/api/post/
        // {
        //     "title": "new title",
        //     "content": "mask content",
        //     "userId": 2
        // }

        const { title, content, userId } = req.body
            // RETURNING = after creating function will return user
            // second param (array) will match to values
        const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1,$2, $3) RETURNING *`,
            [title, content, userId]
        )
        res.json(newPost.rows)
    }

    async getPostsByUser(req, res) {
        // GET http://localhost:8080/api/post?id=2
        const id = req.query.id
        const posts = await db.query(`select * from post where user_id = $1`, [id])
        res.json(posts.rows)
    }
}

module.exports = new PostController()