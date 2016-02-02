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

// configuration =================


app.use(express.static(__dirname + '/app'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());



var VirtialMachines = {};

// routes ======================================================================

// api ---------------------------------------------------------------------
// get all VMs
app.get('/api/vms', function(req, res) {
  res.json(VirtialMachines); // return all VMs in JSON format
  console.log("app.get /api/vms" + JSON.stringify(VirtialMachines));
});

app.get('/api/latency/:lName', function(req, res) {
  console.log("app.get " + JSON.stringify(req.params) + " = " + JSON.stringify(VirtialMachines[req.params.lName]));
  res.json(VirtialMachines[req.params.lName]); // return a VM in JSON format
});

// create a VM and send back all the VMs after creation
app.post('/api/latency/:lName/:lTime/:lValue', function(req, res) {

  console.log("app.post " + JSON.stringify(req.params));
  // create a VM, information comes from AJAX request from the VM agent
  VirtialMachines[req.params.lName]={
    name: req.params.lName,
    value: req.params.lValue,
    time: req.params.lTime
  };
  console.log("app.post " + JSON.stringify(VirtialMachines));
  res.json(VirtialMachines);

});

// delete a VM
app.delete('/api/vm/:lName', function(req, res) {
  VirtialMachines[req.params.lName]= null;
});

// new api ---------------------------------------------------------------------
// create asset
app.post('/monitor/api/asset', function(req,res) {
   console.log("app.post "+req.body); 
});
// create agent


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
