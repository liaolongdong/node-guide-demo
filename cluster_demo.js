// cluster模块允许设立一个主进程和若干个worker进程，
// 由主进程监控和协调worker进程的运行。
var cluster = require('cluster');
var os = require('os');
var http = require('http');

// if(cluster.isMaster){
// 	console.log('cpus: ', os.cpus());
// 	console.log('cpus_len: ', os.cpus().length);
// 	for(var i = 0, len = os.cpus().length; i < len; i += 1 ){
// 		cluster.fork();
// 	}
// }else{
// 	http.createServer(function(req, res){
// 		res.writeHead(200);
// 		res.end('Hello world\n');
// 	}).listen(8000);
// }

// 在主线程中部署online事件和exit事件的监听函数
// if(cluster.isMaster){
// 	var numWorkers = os.cpus().length;
// 	console.log('Master cluster setting up ' + numWorkers + ' workers');
// 	for(var i = 0; i < numWorkers; i ++){
// 		cluster.fork();
// 	}
// 	cluster.on('online', function(worker){
// 		console.log('Worker ' + worker.process.pid + ' is online');
// 	});
// 	cluster.on('exit', function(worker, code, signal){
// 		console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ',and signal: ' + signal);
// 		console.log('Starting a new worker')		;
// 		cluster.fork();
// 	});
// }

// if(cluster.isMaster){
// 	var worker = cluster.fork();
// 	console.log('worker.id: ', worker.id);
// 	console.log('worker.process: ', worker.process);
// 	// worker.send('hi, worker');
// 	// 发出的消息可以是字符串，也可以是JSON对象
// 	worker.send({
// 		type: 'task one',
// 		from: 'master',
// 		data: {
// 			name: 'xiaoxin',
// 			age: 24,
// 			position: 'front-end-engineer'
// 		}
// 	});
// }else if(cluster.isWorker){
// 	process.on('message', function(msg){
// 		console.log('msg: ', msg);
// 		process.send(msg);
// 	});
// }

// cluster.workers对象只有主进程才有，包含了所有worker进程。
// function eachWorker(callback){
// 	for(var id in cluster.workers){
// 		console.log(cluster.worker[id]);
// 		caallback(cluster.worker[id]);
// 	}
// }
// eachWorker(function(worker){
// 	worker.send('big announcement to all workers');
// });

// var socket = require('socket.io');
// socket.on('data', function(id){
// 	var worker = cluster.workers[id];
// 	console.log('worker: ', worker);
// });

// cluster.isMaster表示当前进程是否为主进程，
// 这个属性由process.env.NODE_UNIQUE_ID决定，
// 如果process.env.NODE_UNIQUE_ID为未定义，就表示该进程是主进程
// cluster.isWorker表示当前进程是否为work进程，它与isMaster属性正好相反
// cluster.fork()用于新建一个worker进程，上下文都复制主线程，
// 只有主进程才能条用这个方法。该方法返回一个worker对象
// kill方法用于终止worker进程。可以接受一个参数，表示系统信号。
// 以前版本也叫worker.destroy().

// listening事件，worker进程调用listening方法以后，
// listening事件就传向该进程的服务器，然后传向主进程
// 该事件的回调函数接受两个参数，一个是当前worker对此昂，另一个是抵制对象
// cluster.on('listening', function(worker, address){
// 	console.log('A worker is now connected to ' + address.address + ':' + address.port);
// });

// 不中断地重启node服务
// 首先，主进程向worker进程发出重启信号
// var worker = cluster.fork();
// // var workers = cluster.workers;
// console.log('worker: ', worker);
// // console.log('workers: ', worker);
// worker[id].send({
// 	type: 'shutdown',
// 	form: 'master'
// });
// // worker进程监听message事件，一旦发现内容是shutdown，就退出
// process.on('message', function(message){
// 	if(message.type === 'shutdown'){
// 		process.exit(0);
// 	}
// });

// 关闭所有的worker进程的函数
// function restartWorkers(){
// 	var wid, workerIds = [];
// 	for(wid in cluster.workers){
// 		workerIds.push(wid);
// 	}
// 	workerIds.forEach(function(wid){
// 		cluster.workers[wid].send({
// 			text: 'shutdown',
// 			from: 'master'
// 		});
// 		setTimeout(function(){
// 			if(cluster.workers[wid]){
// 				cluster.workers[wid].kill('SIGKILL');
// 			}
// 		}, 5000);
// 	});
// }
// restartWorkers();

// PM2模块是cluster模块的一个包装层。
// 它的作用是尽量将cluster模块抽象掉，
// 让用户像使用单进程一样，部署多进程Node应用
// var http = require('http');
// http.createServer(function(req, res){
// 	res.writeHead(200);
// 	res.end('Hello world!');
// }).listen(8080);

// process.on('message', function(){
// 	if(msg === 'shutdown'){
// 		close_all_connections();
// 		delete_logs();
// 		server.close();
// 		process.exit(0);
// 	}
// });






























































































































