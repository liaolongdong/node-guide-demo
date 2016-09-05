// http模块主要用于搭建HTTP服务
var http = require('http');
var fs = require('fs');

// http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('Hello World\n');
// }).listen(8080, '127.0.0.1');
// console.log('Server running on port 8080');

// http.createServer(function(req, res){
// 	fs.readFile('./temp/message.txt', function(err, data){
// 		res.writeHead(200, {'Content-type': 'text/plain'});
// 		res.end(data);
// 	});
// 	// 或者
// 	// fs.createReadStream(`${__dirname}/index.html`).pipe(res);
// }).listen(8080, '127.0.0.1');
// console.log('Server running on port 8080.');

// http.createServer(function(req, res){
// 	// 主页
// 	if(req.url == '/'){
// 		res.writeHead(200, {'Content-Type': 'text/html'});
// 		res.end('Welcome to the homepage!');
// 	}
// 	// about页面
// 	else if(req.url == '/about'){
// 		res.writeHead(200, {'Content-Type': 'text/html'});
// 		res.end('Welcome to the about page!');
// 	}
// 	// 404错误
// 	else{
// 		res.writeHead(404, {'Content_Type': 'text/plain'});
// 		res.end('404 error! file not found.');
// 	}
// }).listen(8080, 'localhost');

// 当客户端采用POST方法发送数据时，
// 服务器端可以对data和end两个事件，设立监听函数
// http.createServer(function(req, res){
// 	var content = '';

// 	req.on('data', function(chunk){
// 		content += chunk;
// 	});

// 	req.on('end', function(){
// 		res.writeHead(200, {'Content-Type': 'text/plain'});
// 		res.write('You have sent: ' + content);
// 		res.end();
// 	});
// }).listen(8080);

// 实现文件上传功能
// 'use strict';
// var http = require('http');
// var fs = require('fs');
// var destinationFile, fileSize, uploadedBytes;
// http.createServer(function(req, res){
// 	res.writeHead(200);
// 	destinationFile = fs.createWriteStream('destinationFile.md');
// 	req.pipe(destinationFile);
// 	fileSize = req.headers['content-length'];
// 	uploadedBytes = 0;
// 	req.on('data', function(data){
// 		uploadedBytes += data.length;
// 		var process = (uploadedBytes / fileSize) * 100;
// 		res.write('Uploading ' + parseInt(process, 0) + '%\n');
// 	});
// 	req.on('end', function(){
// 		res.end('File Upload Complete!');
// 	});
// }).listen(3030, function(){
// 	console.log('server started!');
// });

// get方法用于发出get请求
// function getTestPersonLogin(callback){
// 	return http.get({
// 		host: 'persontestuser.org',
// 		path: '/email'
// 	}, function(res){
// 		var body = '';
// 		res.on('data', function(data){
// 			body += data;
// 		});
// 		res.on('end', function(){
// 			var parsed = JSON.parse(body);
// 			callback({
// 				email: parsed.email,
// 				password: parsed.pass
// 			});
// 		});
// 	});
// };
// getTestPersonLogin();
// var querystring = require('querystring');
// var postData = querystring.stringify({
// 	'msg': 'Hello World!'
// });
// var options = {
// 	hostname: 'www.google.com',
// 	port: 80,
// 	path: '/upload',
// 	method: 'post',
// 	headers: {
// 		'Content-Type': 'application/x-www-form-urlencoded',
// 		'Content-Length': postData.length
// 	}
// };
// var req = http.request(options, function(res){
// 	console.log('status: ' + res.statusCode);
// 	console.log('headers: ' + JSON.stringify(res.headers));
// 	res.setEncoding('utf8');
// 	res.on('data', function(chunk){
// 		console.log('body: ' + chunk);
// 	});
// });
// // write data to requset body
// req.write(postData);
// req.end();

// Server方法用于新建一个服务器实例
// var server = new http.Server();
// server.listen(8000);
// server.on('request', function(req, res){
// 	// 解析请求的URL
// 	var url = require('url').parse(req.url);
// 	if(url.pathname === '/test/one'){
// 		res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
// 		res.write('Hello');
// 		res.end();
// 	}else if(url.pathname === '/test/two'){
// 		res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
// 		res.write(req.method + ' ' + req.url + 
// 			' HTTP/' + req.httpVersion + '\r\n');
// 		for(var h in req.headers){
// 			res.write(h + ': ' + req.headers[h] + '\r\n');
// 		}
// 		res.write('\r\n');
// 		req.on('data', function(chunk){
// 			res.write(chunk);
// 		});
// 		req.on('end', function(chunk){
// 			res.end();
// 		});
// 	}else{
// 		var filename = url.pathname.substring(1);
// 	    var type;
// 	    switch(filename.substring(filename.lastIndexOf('.') + 1))  {
// 	      	case 'html':
// 	      	case 'htm':      
// 	      		type = 'text/html; charset=UTF-8'; 
// 	      		break;
// 	      	case 'js':       
// 	      		type = 'application/javascript; charset=UTF-8';
// 	      		break;
// 	      	case 'css':      
// 	      		type = 'text/css; charset=UTF-8'; 
// 	      		break;
// 	      	case 'txt' :     
// 	      		type = 'text/plain; charset=UTF-8'; 
// 	      		break;
// 	      	case 'manifest': 
// 	      		type = 'text/cache-manifest; charset=UTF-8'; 
// 	      		break;
// 	      	default:         
// 	      		type = 'application/octet-stream'; 
// 	      		break;
// 	    }
// 	    fs.readFile(filename, function (err, content) {
// 	      	if (err) {
// 	        	res.writeHead(404, {
// 	          	'Content-Type': 'text/plain; charset=UTF-8'});
// 	        	res.write(err.message);
// 	        	res.end();
// 	      	} else {
// 	        	res.writeHead(200, {'Content-Type': type});
// 	        	res.write(content);
// 	        	res.end();
// 	      	}
// 	    });
// 	}
// });

// 搭建HTTPs服务器
// 自制SSL证书需要OpenSSL，具体命令如下。
// $ openssl genrsa -out key.pem
// $ openssl req -new -key key.pem -out csr.pem
// $ openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
// $ rm csr.pem
// 上面的命令生成两个文件：ert.pem（证书文件）和 key.pem（私钥文件）。
// 有了这两个文件，就可以运行HTTPs服务器了

// node内置https支持
// var server = https.createServer({
// 	key: privateKey,
// 	cert: certificate,
// 	ca: certificateAuthorityCertificate
// }, app);

// node.js提供一个https模块，专门用于处理加密访问
var https = require('https');
var fs = require('fs');
var options = {
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
};
var server = https.createServer(options, function(req, res){
	res.writeHead(200);
	res.end('hello world\n');
}).listen(8000);

























































