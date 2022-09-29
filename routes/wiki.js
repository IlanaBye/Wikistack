const express = require('express');
const wikiRouter = express.Router();
const {addPage} = require("../views");

wikiRouter.get('/', function(req, res, next){
    console.log("WikiRouter Working!");
    res.send("WikiRouter is Working!!!");
});

wikiRouter.post('/', (req, res, next) => {
    res.send('got to post /wiki/')
});

wikiRouter.get('/add', (req, res, next) => {
    res.send(addPage())
});

module.exports = wikiRouter;