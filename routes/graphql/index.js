var express = require('express');
var expressGraphGL = require('express-graphql');
const schema = require('./schema');

const router = express.Router();

/* GET home page. */
router.get('/', expressGraphGL({
    schema,
    graphiql: true
}));



module.exports = router;