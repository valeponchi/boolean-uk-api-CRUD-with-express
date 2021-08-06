const Book = require('./model')

const { findAll, findOne, createOne } = Book()

function getAll(req, res) {
	findAll(books => res.json({ books }))
}

function getOne(req, res) {
	const id = req.params.id
	findOne(Number(id), book => {
		res.json({ book })
	})
}

function postOne(req, res) {
	const newBook = req.body
	createOne(newBook, createdBook => res.json({ createdBook }))
}

module.exports = { getAll, getOne, postOne }
