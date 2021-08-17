const express = require('express')
const app = express()
const ctrl = require('./controller.js')
const port = process.env.PORT || 5050
const cors = require('cors')



app.use(cors())
app.use(express.json())

//End points
app.get('/', ctrl.main)
//takes a color in and sends it back 
app.post('/color', ctrl.color)
app.get('/error', ctrl.error)

app.use(express.static('public'))


app.listen(port, () => console.log(`Server on ${port}`))