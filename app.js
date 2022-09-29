// this is our server

const express = require('express')
const morgan = require('morgan')
const app = express();
const port = 3000;
const layout = require('./views/main')
const { db , Page , User} = require('./models');
const usersRouter = require('./routes/users')
const wikiRouter = require('./routes/wiki')


app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use('/users', usersRouter);
app.use('/wiki', wikiRouter);
app.use('/wiki/add', wikiRouter);

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  });

// app.get('/', (req, res) => {
//     res.send(layout(''));
// })

async function init (){
    await db.sync({force: true});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

init()