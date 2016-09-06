var cluster = require('cluster');
var express = require('express');
var http = require('http');
var app = express();

if(cluster.isMaster){
	require('./cluster_master');
	return;
}

app.get('/', function(req, res){
	res.send('hello nodejs!');
});

http.createServer(app).listen(8080, function(){
	console.log('http://localhost:8080');
});