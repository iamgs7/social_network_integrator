// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var path     = require('path');
var tweets   = require('./routes/tweets');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var user = { id: "abc" }
, OAuth= require('oauth').OAuth
, oa;
var Twit       = require('twit');
var configAuth = require('./config/config');
var twitter = new Twit(configAuth.twitter);

var configDB = require('./config/database.js');

function initTwitterOauth() {
  client = new OAuth(
    "https://twitter.com/oauth/request_token"
  , "https://twitter.com/oauth/access_token"
  , twitter.config.consumerKey
  , twitter.config.consumerSecret
  , "1.0A"
  , "http://127.0.0.1:3000/twitter/authn/callback"
  , "HMAC-SHA1"
  );
}

initTwitterOauth();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/tweets', tweets);

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database


function makeTweet(cb) {
  console.log("make tweet");
  console.log(twitter);//.config.consumerKey + "\n" + config.consumerSecret + '\n' + user.token + '\n' + user.tokenSecret);
  client.post(
    "https://api.twitter.com/1.1/statuses/update.json"
  , twitter.config.access_token
  , twitter.config.access_tokenSecret
  , {"status": "How to Tweet & Direct Message using NodeJS http://blog.coolaj86.com/articles/how-to-tweet-from-nodejs.html via @coolaj86" }
  , cb
  );
}

app.get('/twitter/tweet', function (req, res) {
  makeTweet(function (error, data) {
    res.end('go check your tweets');
  });
});


require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
