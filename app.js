// this is our server

const express = require('express')
const morgan = require('morgan')
const app = express();
const port = 3000;
const layout = require('./views/main')

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

app.get('/', (req, res) => {
    res.send(layout(''))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })