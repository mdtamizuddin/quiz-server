const express = require("express")
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(cors())
app.use(bodyparser.json())

const Port = process.env.PORT || 5000
const uri = process.env.DB_URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Database Is Connected'))
    .catch((err) => console.log(err))

app.use('/quiz', require('./Routes/quizRouter'))
app.get('/', (req, res) => {
    res.send({ message: "Server is Running" })
})

app.listen(Port, () => {
    console.log('Express server is running');
})