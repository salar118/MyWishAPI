var config = require('config');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var Wish = require("./wish");


const {
    mongodb_host,
    mongodb_port
} = config;


// connect to Mongo daemon
mongoose
    .connect(
        `mongodb://${mongodb_host}:${mongodb_port}/wish-db`, {
            useNewUrlParser: true
        }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


const newWish = new Wish({
    title: 'title wish sd ',
    story: 'story of wish'
});

newWish.save();


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond of wishs');
});

module.exports = router;