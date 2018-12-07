var config = require('config');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

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


const wishQueries = require('./query');
const wishValidate = require('./validate');

module.exports = {
    queries: wishQueries,
    validate: wishValidate
};