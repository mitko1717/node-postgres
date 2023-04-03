const Pool = require("pg").Pool

// settings
const pool = new Pool({
    user: "postgres", // user to connect db
    password: '1',
    host: "localhost",
    port: 5432,
    database: 'node_postgres'
})



module.exports = pool