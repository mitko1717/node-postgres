const express = require("express")
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')

const PORT = process.env.PORT || 8080
const app = express()

// to parse json string
app.use(express.json())

// pass url by which the router will be processed
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))