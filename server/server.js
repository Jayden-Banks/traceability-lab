const express = require('express')
const app = express()
const ctrl = require('./controller.js')
const port = process.env.PORT || 5050


// const Rollbar = require("rollbar")
// var rollbar = new Rollbar({
//     accessToken: 'cb3f3025dfe644e9b5d26d2d6b864677',
//     captureUncaught: true,
//     captureUnhandledRejections: true
// });

  // record a generic message and send it to Rollbar
app.use(express.static('public'))
app.use(express.json())

//End points
app.get('/', ctrl.main)
//takes a color in and sends it back 
app.post('/color', (req, res) => {
    let color = req.body.color
    console.log(color)
    res.status(200).send(color)
})

app.get('/error', (req, res) => {
    color()
    res.status(200).send('good')
}) 



app.listen(port, () => console.log(`Server on ${port}`))