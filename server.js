const express = require('express')
const morgan = require('morgan')

//server
const app = express()
//db
const dbClient = require('./src/utils/database')

//ROUTERS
const booksRouter = require('./src/resources/books/router')

//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())

//ROUTES
app.use('/books', booksRouter)

app.get('*', (req, res) => {
	res.json({ msg: 'Your request does not match any routes.. sorry!' })
})

//RUN SERVER
//connection with DB
app.listen(4000, () => {
	dbClient.connect(error => {
		if (error) {
			console.log(`Error: `, error)
		} else {
			console.log('Database and server are connected and running!')
		}
	})
})
