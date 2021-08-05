const Book = require('./model')

const { findAll, createOne } = Book()

function getAll(req, res) {
	findAll(books => res.json({ books }))
}

function postOne(req, res) {
	const newBook = req.body
	createOne(newBook, createdBook => res.json({ createdBook }))
}

module.exports = { getAll, postOne }
