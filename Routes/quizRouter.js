const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const quizSchema = require('../Schema/quizSchema')

const Quiz = new mongoose.model('Quiz', quizSchema)

router.get('/', (req, res) => {
    Quiz.find({}, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            const dataR = data.reverse() 
            res.status(200).send(dataR)
        }
    })
})

router.get('/:id', (req, res) => {
    Quiz.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send(data)
        }
    })
})

router.post('/', (req, res) => {
    const newQuiz = new Quiz(req.body)
    newQuiz.save((err) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send({ message: "New Task Inseted" })
        }
    })
})

router.delete('/:id', (req, res) => {
    Quiz.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send(data)
        }
    })
})

module.exports = router