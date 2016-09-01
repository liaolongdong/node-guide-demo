var fs = require('fs');
var http = require('http');
// var sys = require('sys'); 已废除，使用util替代
var util = require('util');
var stream = require('stream');
var zlib = require('zlib');
var assert = require('assert');

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

// var ws = fs.createWriteStream('./temp/message.txt');
// ws.write('beep ');
// setTimeout(function(){
// 	ws.end('boop\n');
// },1000);

// end方法接受三个参数，全部都是可选参数，
// 第一个参数是最后所要写入的数据，可以是字符串，
// 也可以是stream对象或buffer对象；
// 第二个参数是写入编码；第三个参数是一个回调函数，
// finish事件发生时，会触发这个回调函数
// var writableStream = fs.createWriteStream('./temp/message.txt');
// writableStream.end('最后写入的字符串！', 'utf8', callback);
// function callback(){
// 	console.log('finished！');
// }

// var file = fs.createWriteStream('./temp/example.txt');
// file.write('Hello ');
// file.end('world!');

// var rd = fs.createReadStream('./temp/example.txt');
// var ws = fs.createWriteStream('./temp/example_dest.txt');
// ws.write('写入一些数据!');
// ws.on('drain', function(){
// 	console.log('数据写完了！');
// 	ws.write('再写入点数据！');
// 	console.log('又加了点数据进去！');
// });

// 一个写入100万次的例子，
// 通过drain事件得到可以继续写入的通知
function writeOneMillionTimes(writer, data, encoding, callback){
	var i = 1000000;
	write();
	function write(){
		var ok = true;
		do{
			i -= 1;
			if(i === 0){
				writer.write(data, encoding, callback);
			}else{
				writer.write(data, encoding);
			}
		}while(i > 0 && ok);
		// if(i > 0){
		// 	writer.once('drain', write);
		// }
	}
}
// 变量提升
// console.log('data: ', data); //undefined
// console.log('callback: ', callback); // undefined
// var data = 'message! ';
// var writer = fs.createWriteStream('./temp/oneMillionTimes.txt');
// var encoding = 'utf8';
// var callback = function(){
// 	console.log('write oneMillionTimes finished!');
// };
// writeOneMillionTimes(writer, data, encoding, callback);

// 调用end方法时，所有缓存的数据释放，触发finish事件。
// 该事件的回调函数没有参数
// var writer = fs.createWriteStream('./temp/example1.txt');
// for(var i = 0;i < 100;i ++){
// 	writer.write('hello, #' + i + '!\n');
// }
// writer.end('this is the end!\n');
// writer.on('finish', function(){
// 	console.log('all writes are conplete now!');
// });

// “可写数据流”调用pipe方法，将数据流导向写入目的地时，触发该事件。
// 该事件的回调函数，接受发出该事件的“可读数据流”对象作为参数
// var reader = fs.createReadStream('./temp/message.txt');
// var writer = fs.createWriteStream('./temp/message_dest.txt');
// writer.on('pipe', function(writer){
// 	console.log('something is piping into the writer!');
// 	assert.equal(writer, reader);
// 	console.log(assert.equal(writer, reader));
// });
// reader.pipe(writer);

// “可读数据流”调用unpipe方法，将可写数据流移出写入目的地时，触发该事件。
// 该事件的回调函数，接受发出该事件的“可读数据流”对象作为参数
// var reader = fs.createReadStream('./temp/example.txt');
// var writer = fs.createWriteStream('./temp/example_dest1.txt');
// writer.on('unpipe', function(writer){
// 	console.log('something has stopped piping into the writer');
// 	assert.equal(writer, reader);
// });
// reader.pipe(writer);
// reader.unpipe(writer);

// 如果写入数据或pipe数据时发生错误，就会触发该事件。
// error事件的回调函数，接受一个Error对象作为参数

// var server = http.createServer(function(req, res){
// 	var body = '';
// 	req.setEncoding('utf8');
// 	req.on('data', function(chunk){
// 		body += chunk;
// 	});
// 	req.on('end', function(){
// 	try{
// 		var data = JSON.parse(body);
// 	}catch(err){
// 		res.statusCode = 400;
// 		return res.end('error: ' + err.message);
// 	}
// 	res.write(typeof data);
// 	res.end();
// });
// server.listen(8888);

// http.createServer(function(req, res){
// 	res.writeHead(200);
// 	req.on('data', function(data){
// 		res.write(data);
// 	});
// 	req.on('end', function(){
// 		res.end();
// 	});
// }).listen(3000);

// http.createServer(function(){
// 	res.writeHead(200);
// 	sys.pump(req, res);
// }).listen(3000);

// fs模块的createReadStream方法用于新建读取数据流，createWriteStream方法用于新建写入数据流。
// 使用这两个方法，可以做出一个用于文件复制的脚本copy.js
// node cp.js src.txt dest.txt
// console.log(process.argv[2], '->', process.argv[3]);
// var readStream = fs.createReadStream(process.argv[2]);
// var writeStream = fs.createWriteStream(process.argv[3]);
// readStream.on('data', function(chunk){
// 	writeStream.write(chunk);
// });
// readStream.on('end', function(){
// 	writeStream.end();
// });
// readStream.on('error', function(err){
// 	console.log('error:', err);
// });
// writeStream.on('error', function(err){
// 	console.log('error:', err);
// });

// 使用Stream对象的pipe方法
// console.log(process.argv[1],':', process.argv[2], '->', process.argv[3]);
// var readStream = fs.createReadStream(process.argv[2]);
// var writeStream = fs.createWriteStream(process.argv[3]);
// readStream.on('open', function(){
// 	readStream.pipe(writeStream);	
// });
// readStream.on('end', function(){
// 	writeStream.end();
// });

// 错误处理
// http.createServer(function(req, res){
// 	fs.createReadStream('./temp/oneMillionTimes.txt')
// 		.pipe(zlib.createGzip())
// 		.pipe(res);
// });

// 加上错误监听处理，中断会造成内存泄漏
// http.createServer(function(req, res){
// 	fs.createReadStream('./temp/oneMillionTimes.txt')
// 		.on('error', onerror)
// 		.pipe(zlib.createGzip())
// 		.on('error', onerror)
// 		.pipe(res);

// 		function onerror(err){
// 			console.log(err.stack);
// 		}
// });

http.createServer(function(req, res){
	var stream = fs.createReadStream('./temp/oneMillionTimes');
	stream.on('error',onerror)
		.pipe(zlib.createGzip())
		.on('error',onerror)
		.pipe(res);

	onFinished(res, function(){
		// make sure the stream is always destroyed
		stream.destroy();
	});
});













