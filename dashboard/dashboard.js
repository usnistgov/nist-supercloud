/**
 * Created by cnm2 on 1/20/2016.
 */
// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var cors = require('cors');
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

var port = "8080";
// configuration =================


app.use(express.static(__dirname + '/app'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());


// routes ======================================================================


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("Dashboard started. Listening on port "+port);
