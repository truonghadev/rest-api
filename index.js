var config = require('./config');
var restify = require('restify');
var mongodb = require('mongodb').MongoClient;
var mysql = require('mysql');
var express = require('express');
var app = express();
var server = require('http').createServer(app);

mongodb.connect(config.db.uri, (err, db) => {
  if (err) {
    console.log('An error occurred while attempting to connect to MongoDB', err);
    process.exit(1);
  }
  require('./apis/apis')({ db, app });
})


app.use(express.static(__dirname + '/app'))

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

server.listen(config.port, function(){
  console.log('Express app listening on port ' + config.port + '.');
});

// server.listen(8000);
