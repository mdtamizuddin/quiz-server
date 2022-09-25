const express = require("express")
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyparser.json())

const Port = process.env.PORT || 5000
const uri = `mongodb+srv://linear-graphic:7tfQa8horkvX1ept@cluster0.fcnm4.mongodb.net/quiz?retryWrites=true&w=majority`

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