const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors({credentials: true}))

require('dotenv').config()

app.listen(4000, () => {
	console.log('Listening on port 4000');
})

app.get('/people', require('./controllers/getPeople.js'))
app.get('/planets', require('./controllers/getPlanets.js'))
app.get('/starships', require('./controllers/getStarships.js'))
app.get('/person/:id', require('./controllers/getPerson.js'))
