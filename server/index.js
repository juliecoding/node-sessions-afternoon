const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const checkForSession = require('./middlewares/checkForSession')
const swag_controller = require('./controllers/swag_controller')

const app = express()

app.use(bodyParser.json())
app.use( session({
  secret: 'tapas ?',
  resave: false,
  saveUninitialized: false
}) )
app.use(checkForSession)

app.get('/api/swag', swag_controller.read)

const port = 3000
app.listen(port, () => console.log(`Server listening on port ${port}.`))
