const express = require("express")

const PORT = process.env.PORT || 8080

// creating server
const app = express()

app.get('/', (req, res) => {
    res.send("hello!!")
})

// make server to listen port
app.listen(PORT, () => console.log(`server started on port ${PORT}`))