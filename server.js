const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5050

// const Rollbar = require("rollbar")
// const rollbar = newRollbar({

// })
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(port, () => console.log(`Server on ${port}`))