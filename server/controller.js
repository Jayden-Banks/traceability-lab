const { RSA_NO_PADDING } = require('constants');
const path = require('path')

const Rollbar = require("rollbar")
const rollbar = new Rollbar({
    accessToken: 'cb3f3025dfe644e9b5d26d2d6b864677',
    captureUncaught: true,
    captureUnhandledRejections: true
});

module.exports = {
    main: (req, res) => {
        rollbar.log("Hello world!");
        res.sendFile(path.join(__dirname, '../public/index.html'))
    },
    color: (req, res) => {
        let color = req.body.color
        console.log(color)
        rollbar.log('color added succesfully', {author: 'jayden'})
        res.status(200).send(color)
    },
    error: (req, res) => {
        rollbar.log("this")
        try{
            color()
        } catch (err) {
            console.log(err)
            rollbar.error(err)
        }
        res.status(400).send('Issue')
    } 
}