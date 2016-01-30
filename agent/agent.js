/**
 * Created by fdevaulx on 1/20/2016.
 */
//Load the request module
var request = require('request');
var os = require('os');

/** 
request('http://www.frhead.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // Show the HTML for the Modulus homepage.
    }
});
*/

var host = os.hostname();
var targetHost = "192.168.15.101";
var targetPort = "8080"

var sendDate = (new Date()).getTime();
var destination = "http://"+targetHost+":"+targetPort+"/api/latency/"+host+"/";
var intervalTime = 1000;
var responseTimeMs = 0;
    
var callSrv = null;

function startAgent() {
    callSrv = setInterval(srvTimer, intervalTime);
}

function stopAgent() {
    clearInterval(callSrv);
}

function srvTimer() {
    var receiveDate = 0;
    var localDest  = destination + sendDate+"/"+responseTimeMs;
    console.log("srvTimer " + localDest);
    sendDate = (new Date()).getTime();
    //$.post(localDest, function(data, status){
    //receiveDate = (new Date()).getTime();
    //responseTimeMs = receiveDate - sendDate;
    //console.log(status + " " + localDest);
    //console.log("Data " + data);
    //});
    request({
        url: localDest, //URL to hit
        qs: {}, //Query string data
        method: 'POST'
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            receiveDate = (new Date()).getTime();
            responseTimeMs = receiveDate - sendDate;
            console.log(response.statusCode, body);
        }
    });
}

setTimeout(startAgent,1000);
setTimeout(stopAgent,50000);
