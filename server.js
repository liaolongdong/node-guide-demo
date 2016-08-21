var http = require('http');
var url = require('url');

// first
// http.createServer(function(request, response) {
// 	response.writeHead(200, {'Content-Type':'text/plain'});
// 	response.write('Hello World!');
// 	response.end();
// }).listen(8888);

// second
// function onRequest(request, response){
// 	response.writeHead(200, {'Content-Type':'text/plain'});
// 	response.write('Hello World 2!');
// 	response.end();
// };
// http.createServer(onRequest).listen(8888);

// third
// function onRequest(request, response) {
// 	console.log('Request is received!')
// 	response.writeHead(200, {'COntent-Type':'text/plain'});
// 	response.write('Hello World three!');
// 	response.end();
// };
// http.createServer(onRequest).listen(8888);
// console.log('Server has started!');

// four
// function start(){
// 	function onRequest(request, response){
// 		console.log('Request is received!');
// 		response.writeHead(200, {'Content-Type':'text/plain'});
// 		response.write('Hello World four!');
// 		response.end();
// 	};
// 	http.createServer(onRequest).listen(8888);
// 	console.log('Server has started!');
// };
// exports.start = start;

// five
// function start(){
// 	function onRequest(request, response){
// 		var pathname = url.parse(request.url).pathname;
// 		console.log('Request for ' + pathname + ' received!');
// 		response.writeHead(200, {'COntent-Type':'text/plain'});
// 		response.write('Hello World five!');
// 		response.end();
// 	};
// 	http.createServer(onRequest).listen(8888);
// 	console.log('Server has started!');
// };
// exports.start = start;

// 增加路由
// function start(route){
// 	function onRequest(request, response){
// 		var pathname = url.parse(request.url).pathname;
// 		console.log('Request for ' + pathname + 'received!');

// 		route(pathname);

// 		response.writeHead(200, {'Content-Type':'text/plain'});
// 		response.write('Hello World six!');
// 		response.end();
// 	}
// 	http.createServer(onRequest).listen(8888);
// 	console.log('Server has started!');
// }
// exports.start = start;

// 增加路由处理模块
// function start(route, handle){
// 	function onRequest(request, response){
// 		var pathname = url.parse(request.url).pathname;
// 		console.log('Request for ' + pathname + ' received!');

// 		route(handle, pathname);

// 		response.writeHead(200, {'Content-Type':'text/plain'});
// 		response.write('Hello World seven!');
// 		response.end();
// 	}
// 	http.createServer(onRequest).listen(8888);
// 	console.log('Server has started!');
// }
// exports.start = start;

// 返回路由处理请求结果到浏览器
// function start(route, handle){
// 	function onRequest(request, response){
// 		var pathname = url.parse(request.url).pathname;
// 		console.log('Request for ' + pathname + ' received!');
// 		response.writeHead(200, {'COntent-Type':'text/plain'});
// 		var content = route(handle, pathname);
// 		response.write(content);
// 		response.end();
// 	}
// 	http.createServer(onRequest).listen(8888);
// 	console.log('Server has started!');
// }
// exports.start = start;

//把response对象作为路由处理函数的参数
// function start(route, handle){
// 	function onRequest(request, response){
// 		var pathname = url.parse(request.url).pathname;
// 		console.log('Request for ' + pathname + ' received!');
// 		route(handle, pathname, response);
// 	}
// 	http.createServer(onRequest).listen(8888);
// 	console.log('Server has started!');
// }
// exports.start = start;

//给request对象增加data和end监听事件
// function start(route, handle){
// 	function onRequest(request, response){
// 		var postData = '';
// 		var pathname = url.parse(request.url).pathname;
// 		console.log('Request for ' + pathname + ' received!');
// 		request.setEncoding('utf8');

// 		request.addListener('data', function(postDataChunk){
// 			postData += postDataChunk;
// 			console.log('Request POST data chunk ' + postDataChunk + ' !');
// 		});

// 		request.addListener('end', function(){
// 			route(handle, pathname, response, postData);
// 		});
// 	}
// 	http.createServer(onRequest).listen(8888);
// 	console.log('Server has started!');
// }
// exports.start = start;


var http = require("http");
var url = require("url");
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
exports.start = start;
