const express = require('express')
const  router  = require('./routes/auth-route')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true,
    optionsSuccessStatus: 200
}))

app.use(express.json())

app.use('/api',router)

app.listen(8000)