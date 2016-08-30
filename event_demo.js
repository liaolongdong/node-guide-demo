var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// emitter.on(name, f) 对事件name指定监听函数f
// emitter.addListener(name, f) addListener是on方法的别名
// emitter.once(name, f) 与on方法类似，但是监听函数f是一次性的，使用后自动移除
// emitter.listeners(name) 返回一个数组，成员是事件name所有监听函数
// emitter.removeListener(name, f) 移除事件name的监听函数f
// emitter.removeAllListeners(name) 移除事件name的所有监听函数


// emitter.on('someEvent', function(){
// 	console.log('event has occured!');
// });
// function fun(){
// 	console.log('start');
// 	emitter.emit('someEvent');
// 	console.log('end');
// }
// fun();

// emit()方法用来触发事件
// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();
// var connection = function(id){
// 	console.log('client id:',id);
// };
// emitter.on('connection', connection);
// emitter.emit('connection',666);

// setMaxListeners(),
// Node默认允许同一个事件最多可以指定10个回调函数
// 超过10个回调函数，会发出一个警告。
// 这个门槛值可以通过setMaxListeners方法改变
// emitter.on('someEvent', function(){console.log('event 1');});
// emitter.on('someEvent', function(){console.log('event 2');});
// emitter.on('someEvent', function(){console.log('event 3');});
// emitter.emit('someEvent');
// emitter.setMaxListeners(20);

// var EventEmitter = require('events').EventEmitter;
// function Dog(name){
// 	this.name = name;
// };
// Dog.prototype.__proto__ = EventEmitter.prototype;
// 另一种写法
// Dog.prototype = Object.create(EventEmitter.prototype);
// var simon = new Dog('simon');
// simon.on('bark', function(){
// 	console.log(this.name + 'barked');
// });
// setInterval(function(){
// 	simon.emit('bark');
// },500);

var util = require('util');
var EventEmitter = require('events').EventEmitter;
var Radio = function(station){
	var self = this;
	setTimeout(function(){
		self.emit('open', station);
	},0);
	setTimeout(function(){
		self.emit('close', station);
	},5000);
	this.on('newListener', function(listener){
		console.log('Event Listener: ' + listener);
	});
};
util.inherits(Radio, EventEmitter);
module.exports = Radio;

// newListener事件：添加新的回调函数时触发。
// removeListener事件：移除回调时触发。
// var ee = new EventEmitter();
// ee.on('newListener', function(evtName){
// 	console.log('new Listener: ' + evtName);
// });
// ee.on('removeListener', function(evtName){
// 	console.log('Removed Listener: ' + evtName);
// });
// function foo(){};
// ee.on('save-user', foo);
// ee.removeListener('save-user', foo);

// once方法类似于on方法，但是回调函数只触发一次
// var EventEmitter = require('events').EventEmitter;
// var ee = new EventEmitter();
// ee.once('message', function(msg){
// 	console.log('message: ' + msg);
// });
// ee.emit('message', 'this is the first message!');
// ee.emit('message', 'this is the second message!');
// ee.emit('message', 'welcome to nodejs!');

// 下面代码指定，一旦服务器连通，只调用一次的回调函数
// var server = require('./server');
// util.inherits(server, EventEmitter);
// server.once('connection', function(stream){
// 	console.log('hi, we have our first user!');
// });

// var EventEmitter = require('events').EventEmitter;
// var ee = new EventEmitter();
// ee.on('message', console.log);
// setInterval(function(){
// 	ee.emit('message', 'foo bar');
// },300);
// setTimeout(function(){
// 	ee.removeListener('message', console.log);
// 	process.exit(0);
// },1000);

// 使用removeListener方法模拟once方法
// var EventEmitter = require('events').EventEmitter;
// var ee = new EventEmitter();
// ee.on('firstConnection', onlyOnce);
// function onlyOnce(){
// 	console.log('You will never see this again!');
// 	ee.removeListener('firstConnection', onlyOnce);
// };
// ee.emit('firstConnection');

// removeAllListeners方法用于移除某个事件的所有回调函数
// 如果不带参数，则表示移除所有事件的所有回调函数
// var EventEmitter = require('events').EventEmitter;
// var ee = new EventEmitter;
// ee.removeAllListeners('firstConnection');

// listeners方法接受一个事件名称作为参数，
// 返回该事件所有回调函数组成的数组
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter;
function onlyOnce () {
  console.log(ee.listeners("firstConnection"));
  ee.removeListener("firstConnection", onlyOnce);
  console.log(ee.listeners("firstConnection"));
};
ee.on("firstConnection", onlyOnce);
ee.emit("firstConnection");




























