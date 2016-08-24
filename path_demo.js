var path = require('path');
var fs = require('fs');

// path.join()方法用于连接路径
// var path_join = path.join('./','path/test');
// console.log(path_join);

// path.resolve()方法用于将相对路径转为绝对路径
// var path_resolve = path.resolve('resolve/test','./abc');
// console.log(path_resolve);
// path_resolve = path.resolve('/resolve/test','/abc/123');
// console.log(path_resolve);
// path_resolve = path.resolve('wwwroot','static_files/img/','../git/image.gif');
// console.log(path_resolve);

// accessSync方法用于同步都去一个路径
// 判断一个目录是否存在
// console.log(fs.existsSync('./fs_test_files/test_file.txt'));
// console.log(fs.existsSync('./fs_test_files'));
// function exists(pathname, mode){
// 	try{
// 		fs.accessSync(pathname, mode);
// 		return true;
// 	}catch(e){
// 		return false;
// 	}
// }
// console.log(exists('./test_dir',0777));
// console.log(exists('./test_dir123'));

// path.relative方法接受两个参数，这两个参数都应该是绝对路径。
// 该方法返回第二个路径想对于地一个路径的系那个相对路径。
var path_relative = path.relative('/data/path/test/aaa','/data/path/real/bbb');
console.log(path_relative);




