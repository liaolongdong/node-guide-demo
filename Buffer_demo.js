// Buffer对象是Node处理二进制数据的一个接口。
// 它是Node原生提供的全局对象，可以直接使用，不需要require('buffer')

// 生成一个256字节的Buffer实例
// var bytes = new Buffer(256);
// 便利每个字节，写入内容
// for(var i = 0;i < bytes.length;i ++){
// 	bytes[i] = i;
// }
// 生成一个Buffer的view
// 从240字节到256字节
// var end = bytes.slice(240, 256);
// console.log(end[0]); 
// console.log(end[0] = 0);
// console.log(end[0]);

// Buffer实例拷贝生成
// var bytes = new Buffer(8);
// for(var i = 0;i < bytes.length;i ++){
// 	bytes[i] = i;
// }
// var more = new Buffer(4);
// bytes.copy(more, 0, 4, 8);
// console.log(more[0]);
// console.log(more[1]);
// console.log(more[2]);

// 参数是整数，指定分配多少个字节内存
// 参数是数组，数组成员必须是正整数值
// 参数是字符串（默认utf8）
// 参数是另一个Buffer实例，等同于拷贝后者
// var hello = new Buffer(5);
// console.log(hello);
// var hello = new Buffer([0x48, 0x65, 0x6c, 0x6f]);
// console.log(hello);
// var hello = new Buffer('Hello');
// console.log(hello.length);
// console.log(hello.toString());
// var hello1 = new Buffer('Hello');
// var hello2 = new Buffer(hello1);
// console.log('hello1:',hello1);
// console.log('hello2:',hello2);

// var fs = require('fs');
// var buffer = new Buffer(1024);
// var readSize = fs.readSync(fs.openSync('./fs_test_files/lines.txt','r'), buffer, 0 , buffer.length);
// var chunk = buffer.toString('utf8', 0, readSize);
// console.log('input:', chunk);

// Buffer.isEncoding方法返回一个布尔值，
// 表示Buffer实例是否为指定编码
// var bool = Buffer.isEncoding('utf8');
// console.log('encoding:',bool);

// Buffer.isBuffer方法接受一个对象作为参数，
// 返回一个布尔值，表示该对象是否为Buffer实例
// var date = Buffer.isBuffer(Date);
// console.log('date:',date);
// var buffer = Buffer.isBuffer(new Buffer('hello'));
// console.log('buffer:',buffer);

// Buffer.byteLength方法返回字符串实际占据的字节长度，
// 默认编码方式为utf8
// var len = Buffer.byteLength('Hello','utf8');
// console.log('len:',len);

// Buffer.concat方法将一组Buffer对象合并为一个Buffer对象
// var buf1 = new Buffer('Hello');
// var buf2 = new Buffer('  ');
// var buf3 = new Buffer('World!');
// var concatBuf = Buffer.concat([buf1, buf2, buf3]).toString();
// console.log('concatBuf:',concatBuf);
// var concatBuf1 = Buffer.concat([buf1, buf2, buf3], 10).toString();
// console.log('concatBuf1:',concatBuf1);

// length属性返回Buffer对象所占据的内存长度。
// 注意，这个值与Buffer对象的内容无关
// var buf = new Buffer(1234);
// console.log(buf.length);
// buf.write('some string', 0, 'ascii');
// console.log(buf.length);
// buf.write('some string', 0, 'utf8');
// console.log(buf.length);

// write方法可以向指定的Buffer对象写入数据。
// 它的第一个参数是所写入的内容，第二个参数（可省略）是所写入的起始位置（默认从0开始），
// 第三个参数（可省略）是编码方式，默认为utf8
// var buf = new Buffer(5);
// buf.write('He');
// buf.write('l', 2);
// buf.write('lo',3);
// console.log(buf.toString());

// slice()方法,和数组不同，从1开始
// var buf = new Buffer('just some data!');
// var chunk = buf.slice(5,9);
// console.log(chunk.toString());

// toJSON方法将Buffer实例转为JSON对象。
// 如果JSON.stringify方法调用Buffer实例，
// 默认会先调用toJSON方法
var buf = new Buffer('test');
var json = JSON.stringify(buf);
console.log(json);
var copy = new Buffer(JSON.parse(json));
console.log(copy);
