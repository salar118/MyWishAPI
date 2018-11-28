const express = require('express');
const app = express();
var expressGraphGL = require('express-graphql');
const schema = require('./routes/graphql/schema');
const authRoute = require('../API/routes/auth/routes');
require('./services/auth/passport');

authRoute(app);

app.use('/graphql', expressGraphGL({
  schema,
  graphiql: true
}));

app.get('/', (req, res) => {
  res.send('Hello mywishss');
});

//port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Starting server'))