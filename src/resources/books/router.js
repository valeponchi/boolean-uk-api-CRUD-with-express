const express = require('express')

const { getAll, postOne } = require('./controller')

const booksRouter = express.Router()

//ROUTES
booksRouter.get('/', getAll)
// booksRouter.get('/:id', getOne)
booksRouter.post('/', postOne)

module.exports = booksRouter
