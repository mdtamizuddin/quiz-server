const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({

    question: {
        type: String,
        required: true
    },
    min: {
        type: Number,
        required: true
    },
    max: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = quizSchema