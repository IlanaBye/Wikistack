const express = require('express');
const usersRouter = express.Router();

usersRouter.get('/', function(req,res,next){
    console.log("UsersRouter Working!");
    res.send("UsesrsRouter is Working!!!");
})


module.exports = usersRouter;
