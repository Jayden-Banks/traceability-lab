const express = require('express')
const app = express()
const ctrl = require('./controller.js')
const port = process.env.PORT || 5050
const cors = require('cors')

const Rollbar = require("rollbar")
const rollbar = new Rollbar({
    accessToken: 'cb3f3025dfe644e9b5d26d2d6b864677',
    captureUncaught: true,
    captureUnhandledRejections: true
});


app.use(cors())
app.use(express.json())

//End points
app.get('/', ctrl.main)
//takes a color in and sends it back 
app.post('/color', ctrl.color)
app.get('/error', ctrl.error)

app.use(express.static('public'))
app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`Server on ${port}`))