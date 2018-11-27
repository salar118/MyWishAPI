const express = require('express');
const app = express();
var expressGraphGL = require('express-graphql');
const schema = require('./routes/graphql/schema');

const keys = require('./config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: keys.googleClientId,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, accessToken => {
  console.log(accessToken);
}));

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));
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