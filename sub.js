// 子进程代码
process.on('message', function(m){
	console.log('child got message:', m);
});
process.send({foo : 'bar'});