const dbClient = require('../../utils/database')

function Book() {
	//CREATE TABLE
	function createTable() {
		const sql = `

    CREATE TABLE IF NOT EXISTS books (
      id                SERIAL        PRIMARY KEY,
      title             VARCHAR(100)  NOT NULL,
      type              VARCHAR(100)  NOT NULL,
      author            VARCHAR(100)  NOT NULL,
      topic             VARCHAR(100)  NOT NULL,
      pubblication_date DATE          NOT NULL
    );
    `
		dbClient
			.query(sql)
			.then(() => console.log('Books table created!'))
			.catch(error => console.error(error))
	}

	//findAll
	function findAll(callback) {
		const sql = `
    SELECT *
    FROM books;
    `
		dbClient
			.query(sql)
			.then(result => callback(result.rows))
			.catch(console.error)
	}

	//findOne
	function findOne(bookId, callback) {
		const sql = `
    SELECT * FROM books 
    WHERE id = ($1);
    `
		dbClient.query(sql, [bookId]).then(result => callback(result.rows[0]))
	}

	//createOne
	function createOne(newBook, callback) {
		const { title, type, author, topic, pubblication_date } = newBook
		const sql = `
    INSERT INTO books
    (title, type, author, topic, pubblication_date)
    VALUES
    ($1, $2, $3, $4, $5)
    RETURNING *;
    `
		dbClient
			.query(sql, [title, type, author, topic, pubblication_date])
			.then(result => {
				callback(result.rows[0])
			})
	}

	//CALL CREATE TABLE
	createTable()

	return {
		findAll,
		findOne,
		createOne,
	}
}

module.exports = Book
