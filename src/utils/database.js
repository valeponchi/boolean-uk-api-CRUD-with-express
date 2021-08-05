//config file
//IT DESCRIBES *HOW* THE SERVER CONNECTS TO THE DB

const { Client } = require('pg')
const dotenv = require('dotenv')
dotenv.config()

//ElephanSQL URL
const connectionUrl = process.env.PGURL

const dbClient = new Client(connectionUrl)

module.exports = dbClient
