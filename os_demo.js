// os模块提供与操作系统相关的方法
var os = require('os');

// // os.tmpdir()方法返回操作系统默认的临时文件目录
// console.log('默认临时文件目录：', os.tmpdir());
// // os.endianness()返回CPU的字节序，可能是“BE”或“LE”
// console.log('CPU的字节序：', os.endianness());
// // os.hostname()返回操作系统的主机名
// console.log('操作系统的主机名：', os.hostname());
// // os.type()返回操作系统名称
// console.log('操作系统名称：', os.type());
// // os.platform()返回操作系统平台
// console.log('操作系统平台：', os.platform());
// // os.arch()返回操作系统CPU架构，可能的值有“x64”、“arm”和ia32
// console.log('操作系统CPU架构：', os.arch());
// // os.release()返回操作系统的发行版本
// console.log('操作系统的发行版本：', os.release());
// // os.uptime()返回操作系统运行的时间，以秒为单位
// console.log('操作系统的运行时间：', os.uptime());
// // os.loadavg()返回一个包含1、5/15分钟平均负载数组
// console.log('平均负载数组：', os.loadavg());
// // os.totalmem()返回系统内存总量，单位为字节
// console.log('系统内存总量：', os.totalmem());
// // os.freemem()返回操作系统空闲内存量，单位是字节
// console.log('系统空闲内存量：', os.freemem());
// // os.cpus()返回一个对象数组，包含所安装的每个CPU/内核的信息：
// // 型号、速度（单位MHz）、时间（一个包含user、nice、idle和irq所使用CPU/内核毫秒数的对象
// console.log('每个CPU/内核信息的数组对象：', os.cpus());
// // os.networkInterfaces()获取网络接口的一个列表信息
// console.log('获取网络接口的一个列表信息：', os.networkInterfaces());
// // os.EOL一个定义了操作系统的一行结束的表示的常量
// console.log('表示一行结束的常量：', os.EOL);

var interfaces = os.networkInterfaces();
for(item in interfaces){
	console.log('Network interface name: ' + item);
	for(att in interfaces[item]){
		var address = interfaces[item][att];
		console.log('famliy: ',address.family);
		console.log('IP address: ', address.address);
		console.log('Is Internal: ', address.internal);
		console.log('\n');
	}
	console.log('===================');
}








