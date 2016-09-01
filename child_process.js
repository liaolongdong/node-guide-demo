var path = require('path');
var child_process = require('child_process');

// child_process模块用于新建子进程。
// 子进程的运行结果储存在系统缓存之中（最大200KB），
// 等到子进程运行结束以后，主进程再用回调函数读取子进程的运行结果

// exec方法用于执行bash命令，它的参数是一个命令字符串
// var exec = require('child_process').exec;
// var ls = exec('ls -l', function(error, stdout, stderr){
// 	if(error){
// 		console.log(error.stack);
// 		console.log('Error code : ' + error.code);
// 	}
// 	console.log('child process stdout:' + stdout);
// });

// var exec = require('child_process').exec;
// var child = exec('ls -l');
// child.stdout.on('data', function(data){
// 	console.log('stdout:' + data);
// });
// child.stderr.on('data', function(data){
// 	console.log('stderr:' + data);
// });
// child.on('close', function(code){
// 	console.log('closing code:' + code);
// });
// 监听data事件以后，可以实时输出结果，否则只有等到子进程结束，才会输出结果。
// 所以，如果子进程运行时间较长，或者是持续运行，第二种写法更好

// var exec = require('child_process').exec;
// exec('node -v', function(error, stdout, stderr){
// 	console.log('stdout: ' + stdout);
// 	console.log('stderr: ' + stderr);
// 	if(error !== null){
// 		console.log('exec error: ' + error);
// 	}
// });

// var child_process = require('child_process');
// var path = ';user input';
// child_process.exec('ls -l' + path, function(err, data){
// 	console.log(data);
// });
// 在有用户输入的情况下，最好不使用exec方法，而是使用execFile方法

// var execSync = require('child_process').execSync;
// var separator = process.platform == 'win32' ? ';' : ':';
// var env = Object.assign({}, process.env);
// env.PATH = path.resolve('./node_modules/.bin') + separator + env.PATH;
// function myExecSync(cmd){
// 	var output = execSync(cmd, {
// 		cwd: process.cwd(),
// 		env: env
// 	});
// 	console.log(output);
// }
// myExecSync('eslint .');

// execFile方法直接执行特定的程序，
// 参数作为数组传入，不会被bash解释，因此具有较高的安全性
// var path = '.';
// child_process.execFile('/temp/ls', ['-1', path], function(err, result){
// 	console.log(result);
// });

// spawn方法创建一个子进程来执行特定命令，用法与execFile方法类似，
// 但是没有回调函数，只能通过监听事件，来获取运行结果。
// 它属于异步执行，适用于子进程长时间运行的情况
// var path = '.';
// var ls = child_process.spawn('./node_modules/jquery/dist/jquery.js', ['-1', path]);
// ls.stdout.on('data', function(data){
// 	console.log('stdout: ' + data);
// });
// ls.stderr.on('data', function(data){
// 	console.log('stderr: ' + data);
// });
// ls.on('close', function(code){
// 	console.log('child process exited with code ' + code);
// });

// spawn方法与exec方法非常类似
// child_process.exec(command, [options], callback);
// child_process.spawn(command, [args], [options]);

// fork方法直接创建一个子进程，执行node脚本
// fork('./child.js') 相当于 spawn('node', ['./child.js']) 。
// 与spawn方法不同的是，fork会在父进程与子进程之间，
// 建立一个通信管道，用于进程之间的通信。
// var n = child_process.fork('./child.js');
// n.on('message', function(m){
// 	console.log('parent got message: ', m);
// });
// n.send({
// 	hello: 'world'
// });

// 使用 child_process.fork() 生成新进程之后，
// 就可以用 child.send(message, [sendHandle]) 向新进程发送消息。
// 新进程中通过监听message事件，来获取消息
// 主进程代码
var child_process = require('child_process');
var mainProcess = child_process.fork(__dirname + '/sub.js');;
mainProcess.on('message', function(m){
	console.log('parent got message : ', m);
});
mainProcess.send({hello:'world'});




















