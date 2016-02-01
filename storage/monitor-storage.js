var r = require('rethinkdb');

var connection = null;
r.connect( {host: '192.168.15.104', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
});

r.dbCreate('spcmonitorstorage').run(connection, function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
});

r.db('spcmonitorstorage').tableCreate('agent').run(connection, function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
});

r.db('spcmonitorstorage').tableCreate('asset').run(connection, function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
});