const express = require('express')
const app = express()
const ctrl = require('./controller.js')
const port = process.env.PORT || 5050



app.use(express.static('public'))
app.use(express.json())

//End points
app.get('/', ctrl.main)
//takes a color in and sends it back 
app.post('/color', ctrl.color)
app.get('/error', ctrl.error)



app.listen(port, () => console.log(`Server on ${port}`))