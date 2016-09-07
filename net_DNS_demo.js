// net模块用于底层的网络通信

var net = require('net');
var fs = require('fs');

// var server = net.createServer();
// server.listen(2000, function(){
// 	console.log('Listening on port 2000');
// });
// server.on('connection', function(stream){
// 	console.log('Accepting connection from ', stream.remoteAddress);
// 	stream.on('data', function(data){
// 		stream.write(data);
// 	});
// 	stream.on('end', function(data){
// 		console.log('Connection closed');
// 	});
// });

// 服务器端Socket接口
// var port = 1081;
// var logo = fs.readFileSync('logo.txt');
// var psl = '\n\n>>> ';
// net.createServer(function(socket){
// 	socket.write(logo);
// 	socket.write(psl);
// 	socket.on('data', recv.bind(null, socket));
// }).listen(port);
// function recv(socket, data){
// 	if(data === 'quit'){
// 		socket.end('bye!\n');
// 		return;
// 	}
// 	request({url: baseUrl + data}, function(error, response, body){
// 		if(body && body.length){
// 			$ = cheerio.load(body);
// 			socket.write($('#mw-content-text p').first().text() + '\n');
// 		}else{
// 			socket.write('Error: ' + response.statusCode);
// 		}
// 		socket.write(psl);
// 	});
// }

// var serverPort = 9999;
// var net = require('net');
// var server = net.createServer(function(client){
// 	console.log('client connected');
// 	console.log('client IP Address:' + client.remoteAddress);
// 	console.log('is net.isIPv6:' + net.isIPv6(client.remoteAddress));
// 	console.log('total server getConnections: ' + server.getConnections);
// 	// waiting for data from the client
// 	client.on('data', function(data){
// 		console.log('received data: ' + data.toString());
// 		// write data to the cilent socket
// 		client.write('hello from server');
// 	});
// 	// closed socket event from the client
// 	client.on('end', function(){
// 		console.log('client disconnected');
// 	});
// });
// server.on('error', function(err){
// 	console.log(err);
// });
// server.listen(serverPort, function(){
// 	console.log('server started on port ' + serverPort);
// });

// 客户端socket接口
// var serverPort = 6666;
// var server = 'localhost';
// var net = require('net');
// console.log('connecting to server...');
// var client = net.connect({server: server, port: serverPort}, function(){
// 	console.log('client connected');
// 	// send data
// 	console.log('send data to server');
// 	client.write('greeting from client socket');
// });
// client.on('data', function(data){
// 	console.log('received data: ' + data.toString());
// 	client.end();
// });
// client.on('end', function(){
// 	console.log('client disconnected');
// });
// client.on('error', function(err){
// 	console.log('err_msg: ' + err.message);
// 	console.log('err_code: ' + err.code);
// 	console.log('err_status: ' + err.status);
// 	console.log('err_status_code: ' + err.statusCode);
// });

// DNS模块用于解析域名。
// resolve4方法用于IPv4环境，resolve6方法用于IPv6环境，
// lookup方法在以上两种环境都可以使用，
// 返回IP地址（address）和当前环境（IPv4或IPv6）。
var dns = require('dns');
dns.resolve4('www.baidu.com', function(err, address){
	if(err){
		console.log('err_msg: ', err.message);
	}else{
		console.log('address: ', JSON.stringify(address));
	}
});
dns.resolve6('www.baidu.com', function(err, address){
	if(err){
		console.log('err_msg: ', err.message);
	}else{
		console.log('address: ', JSON.stringify(address));
	}
});
dns.lookup('www.baidu.com', function(err, address, family){
	if(err){
		console.log('err_msg: ', JSON.stringify(address));
	}else{
		console.log('address: ', JSON.stringify(address));
		console.log('family: ', JSON.stringify(family));
	}
});







































































































