// assert模块是Node的内置模块，主要用于断言。
// 如果表达式不符合预期，就抛出一个错误。
// 该模块提供11个方法，但只有少数几个是常用的。

// assert方法接受两个参数，
// 当第一个参数对应的布尔值为true时，不会有任何提示，返回undefined。
// 当第一个参数对应的布尔值为false时，会抛出一个错误，
// 该错误的提示信息就是第二个参数设定的字符串。
// 格式
// assert(value, message);
// demo
var assert = require('assert');

function add(a, b){
	return a + b;
}
// var expected = add(1, 2);
// assert(expected === 3, '预期1加2等于3');
// assert(expected === 4, '预期1加2等于3');
// error: AssertionError: 预期1加2等于3

// assert.ok()是assert方法的另一个名字，与assert方法完全一样
// var expected = add(1, 1);
// assert.ok(expected === 2, '符合预期结果！');
// assert.ok(expected === 1, '不符合预期结果！');

// assert.equal方法接受三个参数，第一个参数是实际值，
// 第二个是预期值，第三个是错误的提示信息
// 格式
// assert.equal(actual, expected, [message]);
// assert.equal(true, value, message);
// 等同于
// assert(value, message);
// demo
// var assert = require('assert');
// function add(a, b){
// 	return a + b;
// }
// var expected = add(1, 2);
// // 以下三局效果相同
// assert(expected === 3, '预期1+2等于3');
// assert.ok(expected === 3, '预期1+2等于3');
// assert.equal(expected, 3, '预期1+2等于3');
// equal方法内部使用的是相等运算符（==），
// 而不是严格运算符（===），进行比较运算

// notEqual方法的用法与equal方法类似，
// 但只有在实际值等于预期值时，才会抛出错误
// 格式
// assert.notEqual(actual, expected, [message]);
// demo
// var expected = add(1,2);
// // 以下三种写法效果相同
// assert(expected != 4, '预期不等于4');
// assert.ok(expected != 4, '预期不等于4');
// assert.notEqual(expected, 4, '预期不等于4');

// deepEqual方法用来比较两个对象。
// 只要它们的属性一一对应，且值都相等，
// 就认为两个对象相等，否则抛出一个错误
// 格式
// assert.deepEqual(actual, expected, [messsage]);
// demo
// var arr1 = [1,2,3,4,5];
// var arr2 = [1,2,3,4,5];
// assert.deepEqual(arr1, arr2, '预期两个数组应该有相同的属性');
// var person1 = {name: 'xiaoxin', age: 24};
// var person2 = {name: 'xiaoxin', age: '24'};
// // person1.age = 20;
// var person3 = person1;
// assert.deepEqual(person1, person2, '预期两个对象应该有相同属性');

// 格式
// assert.notDeepEqual(actual, expected, [message]);
// demo
// var arr1 = [1,2,3,4];
// var arr2 = [1,2,3,4,5];
// assert.notDeepEqual(arr1, arr2, '预期两个数组不相等');
// var person1 = {name: 'xiaoxin', age: '20'};
// var person2 = {name: 'xiaoxin', age: '19'};
// assert.notDeepEqual(person1, person2, '预期两个对象不相等');

// strictEqual方法使用严格相等运算符（===），比较两个表达式
// 格式
// assert.strictEqual(actual, expected, [message]);
// demo
// assert.strictEqual(1, '1', '预期严格相等');

// assert.notStrictEqual方法使用严格不相等运算符（!==），比较两个表达式
// 格式
// assert.notStrictEqual(actual, expected, [message]);
// demo
// assert.notStrictEqual(1, true, '预期严格不相等');

// throws方法预期某个代码块会抛出一个错误，且抛出的错误符合指定的条件
// 格式
// assert.throws(block, [error], [message]);
// demo1，抛出的错误符合某个构造函数
// assert.throws(function(){
// 	throw new Error('wrong value');
// }, Error, '不符合预期的错误类型');

// demo2，抛出的错误提示信息符合正则表达式
// assert.throws(function(){
// 	throw new Error('wrong value');
// }, /value/, '不符合预期的错误类型');

// demo3，抛出的错误符合自定义函数的校验
// assert.throws(
// 	function(){
// 		throw new Error('wrong value');
// 	},
// 	function(err){
// 		if((err instanceof Error) && /value/.test(err)){
// 			return true;
// 		}
// 	},
// 	'不符合预期的错误类型'
// );

// doesNotThrow方法与throws方法正好相反，预期某个代码块不抛出错误
// 格式
// assert.doesNotThrow(block, [message]);
// demo
// assert.doesNotThrow(
// 	function(){
// 		console.log('nothing to see here!');
// 	},
// 	'预期不抛出错误'
// );

// ifError方法断言某个表达式是否false，如果该表达式对应的布尔值等于true，就抛出一个错误。
// 它对于验证回调函数的第一个参数十分有用，如果该参数为true，就表示有错误。
// 格式
// assert.ifError(value);
// demo
// function sayHello(name, callback){
// 	// var error = true;
// 	var error = false;
// 	var str = 'Hello ' + name;
// 	callback(error, str);
// }
// sayHello('world', function(err, value){
// 	assert.ifError(err);
// });

// fail方法用于抛出一个错误
// 格式
// assert.fail(actual, expected, message, operator);
// demo
// var assert = require('assert');
// assert.fail(21, 22, 'Test1 Failed', '###');
// assert.fail(21, 21, 'Test2 failed', '###');
assert.fail(21, 22, undefined, '###');
// 该方法共有四个参数，但是不管参数是什么值，它总是抛出一个错误。
// 如果message参数对应的布尔值不为false，抛出的错误信息就是message，
// 否则错误信息就是“实际值 + 分隔符 + 预期值”。










































































