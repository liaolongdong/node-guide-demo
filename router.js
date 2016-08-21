// function route(pathname){
// 	console.log('About to route a request for ' + pathname);
// }

// exports.route = route;

// function route(handle, pathname){
// 	console.log('About to route a request for ' + pathname);
// 	if(typeof handle[pathname] === 'function'){
// 		handle[pathname]();
// 	}else{
// 		console.log('No request handler found for ' + pathname);
// 	}
// }
// exports.route = route;

// function route(handle, pathname){
// 	if(typeof handle[pathname] === 'function'){
// 		return handle[pathname]();
// 	}else{
// 		console.log('No request handler found for ' + pathname);
// 		return '404 Not found!';
// 	}
// }
// exports.route = route;

// function route(handle, pathname, response){
// 	console.log('About to route request for ' + pathname);
// 	if(typeof handle[pathname] === 'function'){
// 		handle[pathname](response);
// 	}else{
// 		console.log('No request handler found for ' + pathname);
// 		response.writeHead(404, {'Content-type':'text/plain'});
// 		response.write('404 Not found!');
// 		response.end();
// 	}
// }
// exports.route = route;

// function route(handle, pathname, response, postData){
// 	console.log('About to route a request for ' + pathname);
// 	if(typeof handle[pathname] === 'function'){
// 		handle[pathname](response, postData);
// 	}else{
// 		console.log('No request found for ' + pathname);
// 		response.writeHead(200, {'Content-Type':'text/plain'});
// 		response.write('404 Not found!');
// 		response.end();
// 	}
// }
// exports.route = route;


function route(handle, pathname, response, request) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}
exports.route = route;