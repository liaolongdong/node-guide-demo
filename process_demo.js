var fs = require('fs');
var zlib = require('zlib');
var http = require('http');

// process对象提供一系列属性，用于但会系统信息。
// 返回当前进程的命令行参数数组
// console.log('argv:',process.argv);
// 返回一个对象，成员为当前Shell的环境变量，比如process.env.HOME
// console.log('env',process.env);
// node的安装路径的前缀
// console.log('installPrefix:',process.installPrefix);
// 当前进程的进程号
// console.log('pid:',process.pid);
// 当前系统平台
// console.log('platform:',process.platform);
// 默认值为‘node’,可以自定义
// console.log('tilte:',process.title);
// node版本
// console.log('version:',process.version);

// stdout属性指向标准输出
// console.log = function(data){
// 	process.stdout.write(data + '\n');
// }

// fs.createReadStream('./fs_test_files/test_file.txt')
// 	.pipe(process.stdout);

// fs.createReadStream('./fs_test_files/lines.txt')
// 	.pipe(zlib.createGzip())
// 	.pipe(process.stdout);

// stdin代表标准输入
// process.stdin.pipe(process.stdout);

// process.stdin.setEncoding('utf8');
// process.stdin.on('readable', function(){
// 	var chunk = process.stdin.read();
// 	if(chunk !== null){
// 		process.stdout.write('data:' + chunk);
// 	}
// });
// process.stdin.on('end', function(){
// 	process.stdout.write('end');
// });

// 返回运行当前脚本的工作目录的路径
// console.log('cwd:',process.cwd());
// 切换工作目录指定目录
// console.log('chdir:',process.chdir('./fs_test_files'));
// console.log('cwd:',process.cwd());

// process.nextTick将任务放到当前一轮事件循环（Event Loop）的尾部
// setTimeout(f,0)是将任务放到下一轮事件循环的头部，因此nextTick会比它先执行。
// 另外，nextTick的效率更高，因为不用检查是否到了指定时间
// setTimeout(function () {
//   console.log('1.已经到了下一轮Event Loop！');
// }, 0)
// process.nextTick(function(){
// 	console.log('下一次Event Loop即将开始！');
// });
// setTimeout(function () {
//   console.log('2.已经到了下一轮Event Loop！');
// }, 0)

// process.exit(),大于0表示执行失败，0表示执行成功
// if(err){
// 	process.exit(1);
// }else{
// 	process.exit(0);
// }
// process.exit();

// process对象部署了EventEmitter接口，
// 可以使用on方法监听各种事件，并指定回调函数
// process.on('uncaughtException', function(err){
// 	console.log('got an error: %s', err.message);
// 	process.exit(1);
// });
// setTimeout(function(){
// 	throw new Error('fail!');
// },100);

// SIGINT事件：接收到系统信号SIGINT时触发，
// 主要是用户按Ctrl + c时触发
// process.on('SIGINT', function(){
// 	console.log('Got a SIGINT. CoodBye cruel world!');
// 	process.exit(0);
// });
// console.log('start!');
// process.on('SIGINT', function(){
// 	console.log('Ignore Ctrl-C');
// });
// console.log('end');

// var server = http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-type':'text/plain'});
// 	res.write('Hello World!');
// 	res.end();
// }).listen(8888);
// console.log('Server has started!');
// process.on('SIGTERM', function(){
// 	process.exit(0);
// });

// exit事件在node进程退出时触发
// process.on('exit', function(){
// 	console.log('Coodbye');
// });
// process.on('exit', function(){
// 	fs.writeFileSync('./temp/myfile','需要保存到硬盘的信息！');
// });
// process.on('exit', function(code){
// 	console.log('exiting with code:' + code);
// });
// 不能执行异步操作
// process.on('exit', function(code){
// 	setTimeout(function(){
// 		console.log('exiting with code:' + code);
// 	});
// });

// 没有被捕捉的错误时，触发uncaughtException
// process.on('uncaughtException', function(err){
// 	console.error('An uncaught error occurred!');
// 	console.error(err.stack);
// 	throw new Error('未捕获错误');
// });
// setTimeout(function(){
// 	throw new Error('occurred error!');
// },200);
// setTimeout(function(){
// 	console.log('本行依然执行！');
// },500);

// 读取标准输入，这主要是为了不让当前进程退出
process.stdin.resume();
process.on('SIGINT', function(){
	console.log('SIGINT信号，按Control-D退出');
});
// 上面代码部署了SIGINT信号的监听函数，
// 当用户按下Ctrl-C后，会显示提示文字



