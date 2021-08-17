const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5050

const Rollbar = require("rollbar")
var rollbar = new Rollbar({
    accessToken: 'cb3f3025dfe644e9b5d26d2d6b864677',
    captureUncaught: true,
    captureUnhandledRejections: true
});

  // record a generic message and send it to Rollbar

app.use(express.json())

app.get('/', (req, res) => {
    rollbar.log("Hello world!");
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/api/color', (req, res) => {
    color()
})



app.listen(port, () => console.log(`Server on ${port}`))