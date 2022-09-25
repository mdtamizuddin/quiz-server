const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    correct: {
        type: String,
        required: true
    },
    options: {
        type: Object,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = quizSchema