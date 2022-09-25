const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const sortSchema = require('../Schema/sortSchema')

const SortQuestion = new mongoose.model('Sort', sortSchema)

router.get('/', (req, res) => {
    SortQuestion.find({}, (err, data) => {
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
    SortQuestion.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send(data)
        }
    })
})

router.post('/', (req, res) => {
    const newQuiz = new SortQuestion(req.body)
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
    SortQuestion.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Something went wrong" })
        }
        else {
            res.status(200).send(data)
        }
    })
})

module.exports = router