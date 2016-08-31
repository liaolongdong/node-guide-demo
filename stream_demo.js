var fs = require('fs');
var stream = require('stream');
var zlib = require('zlib');

var readable = fs.createReadStream('./fs_test_files/lines.txt');
// fs.createReadStream('./temp/test.gif')
// 	.pipe(process.stdout);

// fs模块的createReadStream方法，
// 就可以创建一个读取数据的数据流.
// 监听data事件，获取每一个数据块；
// 监听end事件，当数据传送结束，再统一处理
// var stream = fs.createReadStream('./temp/myfile');
// stream.setEncoding('utf8');
// var data = '';
// stream.on('data', function(chunk){
// 	data += chunk;
// });
// stream.on('end', function(){
// 	console.log('Data: ', data);
// 	console.log('Data length: %d', data.length);
// });

// 监听readable事件，也可以取得与监听data事件同样的效果
// var stream = fs.createReadStream('./fs_test_files/lines.txt');
// var data = '';
// stream.on('readable', function(){
// 	var chunk;
// 	while(chunk = stream.read()){
// 		data += chunk;
// 	}
// 	console.log('data: ', data);
// });
// 暂停
// stream.pause();
// 1秒后恢复
// setTimeout(stream.resume.bind(stream),1000);

// var stream = fs.createReadStream('./fs_test_files/lines.txt');
// stream.pause();
// var pulledData = '';
// var pushedData = '';
// stream.on('readable', function(){
// 	var chunk = '';
// 	while(chunk = stream.read()){
// 		pulledData += chunk;
// 	}
// });
// stream.on('data', function(){
// 	pushedData += chunk;
// });

var fs = require('fs');
var zlib = require('zlib');
// 输出乱码
// fs.createReadStream('./fs_test_files/lines.txt')
// 	.pipe(zlib.createGzip())
// 	.pipe(process.stdout);
// fs.createReadStream('./fs_test_files/lines.txt')
// 	.pipe(zlib.createGzip())
// 	.pipe(fs.createWriteStream('./fs_test_files/lines_Gzip.gz'));

// var stream = require('stream');
// var Stream = stream.Stream;
// var st = new Stream();
// st.writable = true;
// st.write = function(data){
// 	console.log('input=' + data);
// };
// st.end = function(data){
// 	console.log('bye');
// };
// process.stdin.pipe(st);

// 可读数据流
// var Readable = require('stream').Readable;
// var read = new Readable();
// read.push('beep ');
// read.push('boop\n');
// read.push(null);
// read.pipe(process.stdout);

// var fs = require('fs');
// var readableStream = fs.createReadStream('./fs_test_files/lines.txt');
// var data = '';
// readableStream.setEncoding('utf8');
// readableStream.on('data', function(chunk){
// 	data += chunk;
// });
// readableStream.on('end', function(){
// 	console.log(data);
// });

// var fs = require('fs');
// var readableStream = fs.createReadStream('./fs_test_files/lines.txt');
// var data = '';
// var chunk;
// readableStream.setEncoding('utf8');
// readableStream.on('readable', function(){
// 	while((chunk = readableStream.read()) !== null){
// 		data += chunk;
// 	}
// });
// readableStream.on('end', function(){
// 	console.log(data);
// });

// var readable = fs.createReadStream('./fs_test_files/lines.txt');
// readable.on('readable', function(){
// 	var chunk;
// 	while(null !== (chunk = readable.read())){
// 		console.log('got %d bytes of data', chunk.length);
// 	}
// });

// var Readable = require('stream').Readable;
// var rd = Readable();
// var c = 97;
// rd._read = function(){
// 	rd.push(String.fromCharCode(c++));
// 	if(c > 'z'.charCodeAt(0)){
// 		rd.push(null);
// 	}
// };
// rd.pipe(process.stdout);

// var assert = require('assert');
// var readable = fs.createReadStream('./fs_test_files/lines.txt');
// readable.setEncoding('utf8');
// readable.on('data', function(chunk){
// 	console.log(assert.equal(typeof chunk, 'string'));
// 	console.log('got %d characters of string data', chunk.length);
// });

// var readable = fs.createReadStream('./fs_test_files/lines.txt');
// readable.on('data', function(chunk){
// 	var data;
// 	data += chunk;
// 	console.log('data: ',data);
// });
// readable.resume();
// readable.on('end', function(chunk){
// 	console.log('数据流到达尾部，未读取任务数据');
// });

// var readable = fs.createReadStream('./fs_test_files/lines.txt');
// readable.on('data', function(chunk){
// 	console.log('读取%d字节的数据', chunk.length);
// 	readable.pause();
// 	console.log('接下来的1秒内不读取数据');
// 	setTimeout(function(){
// 		console.log('数据恢复读取');
// 		readable.resume();
// 	}, 1000);
// });
// readable.on('end', function(){
// 	console.log('数据读取完毕！');
// });

// var readable = new stream.Readable;
// console.log(readable.isPaused());
// readable.pause();
// console.log(readable.isPaused());
// readable.resume();
// console.log(readable.isPaused());

// var readableStream = fs.createReadStream('./fs_test_files/lines.txt');
// var writableStream = fs.createWriteStream('./fs_test_files/lines_write.txt');
// readableStream.pipe(writableStream);

// fs.createReadStream('./fs_test_files/lines_Gzip.gz')
// 	.pipe(zlib.createGunzip())
// 	.pipe(fs.createWriteStream('./fs_test_files/lines_unzip.txt'));

// process.stdin.pipe(process.stdout);

// var readable = fs.createReadStream('./temp/myfile');
// var writer = fs.createWriteStream('./temp/mytext.txt');
// readable.pipe(writer, {end:false});
// readable.on('end', function(){
// 	writer.end('Goodbye\n');
// });

// var readable = fs.createReadStream('./fs_test_files/lines.txt');
// var writable = fs.createWriteStream('./fs_test_files/lines_w.txt');
// readable.pipe(writable);
// setTimeout(function(){
// 	console.log('停止写入myfile.txt');
// 	readable.unpipe(writable);
// 	console.log('手动关闭myfile.txt的写入数据流');
// 	writable.end();
// }, 1000);

// s.on('data', f);    // 收到新的数据时，data事件就会发生，触发f()
// s.on('end', f);     // 数据读取完以后，不会再收到数据了，end事件发生，触发f()
// s.on('error', f);   // 发生错误时，error事件发生，触发f()
// s.readable          // => true if it is a readable stream that is still open
// s.pause();          // Pause "data" events.  For throttling uploads, e.g.
// s.resume();         // Resume again

// // readable事件在数据流能够向外提供数据时触发。
// readable.on('readable', function() {
//   // there is some data to read now
// });

// process.stdin.on('readable', function(){
// 	var buf = process.stdin.read();
// 	console.dir(buf);
// });

// process.stdin.on('readable', function(){
// 	var buf = process.stdin.read(2);
// 	console.dir(buf);
// });

// readable.on('data', function(chunk){
// 	console.log('got %d bytes of data', chunk.length);
// });
// readable.on('end', function(){
// 	console.log('there will be no more data.');
// });


// 可写数据流
// var readableStream = fs.createReadStream('./temp/myfile');
// var writableStream = fs.createWriteStream('./temp/myfile1.txt');
// readableStream.on('data', function(chunk){
// 	writableStream.write(chunk);
// });
// console.log(writableStream.writable);

var ws = fs.createWriteStream('./temp/message.txt');
ws.write('beep ');
setTimeout(function(){
	ws.end('boop\n');
},1000);





















































