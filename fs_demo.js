var fs = require('fs');
var util = require('util');
var path = require('path');

//异步读取文件
// fs.readFile('./fs_test_files/test_file.txt', function(err, data){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(data.toString());
// });


//同步读取文件，指定编码返回字符串，不指定返回buffer实例
// var text = fs.readFileSync('./fs_test_files/test_file.txt');
// console.log(text.toString());
// var text = fs.readFileSync('./fs_test_files/test_file.txt', 'utf8');
// console.log(text);
// //将文件按行拆成数组
// var txtArr = [];
// text.split(/\r?\n/).forEach(function(line){
// 	txtArr.push(line);
// });
// console.log(txtArr);

// 异步写入文件
// fs.writeFile('./fs_test_files/message.txt', 'Hello Node fs module!', 'utf8', function(err){
// 	if(err){
// 		throw err;
// 	}
// 	console.log('This message is saved!');
// });

// 同步写入文件
// fs.writeFileSync('./fs_test_files/messageSync.txt', 'This sync write file!', 'utf8');
// console.log('This write is saved!');


// 判断给定的路径是否存在
// fs.exists('./fs_test_files/test_file.txt', function(exists){
// 	util.debug(exists ? 'It is exist!' : 'no file!');
// });

// 判断目录是否存在，如果存在则删除目录,目录下有文件不能删除
// var dir_path = './test_dir';
// if(fs.existsSync(dir_path)){
// 	fs.rmdirSync(dir_path);
// 	console.log('remove dir:',dir_path);
// }else{
// 	console.log('This dir is not exist!');
// }

// 创建目录
// fs.mkdir('./mkdir',0777,function(err){
// 	if(err){
// 		throw err;
// 	}else{
// 		console.log('create dir success!');
// 	}
// });

// 异步读取目录，返回包含文件和子目录数组
// fs.readdir(process.cwd(), function(err, files){
// 	if(err){
// 		console.log(err);
// 		return;
// 	}else{
// 		console.log(files);
// 		var count = files.length;
// 		var results = {};
// 		files.forEach(function(filename){
// 			fs.readFile(filename,function(data){
// 				results[filename] = data;
// 				count--;
// 				if(count <= 0){
// 					console.log(results);
// 				}
// 			})
// 		});
// 	}
// });

// 同步读取目录，返回包含文件和子目录数组
// var files = fs.readdirSync(process.cwd());
// files.forEach(function(filename){
// 	var fullname = path.join(process.cwd(),filename);
// 	var stats = fs.statSync(fullname);
// 	if(stats.isDirectory()){
// 		filename += '/';
// 		console.log(filename);
// 	}else{
// 		process.stdout.write(filename + '\t' +
// 			stats.size + '\t' + 
// 			stats.mtime + '\n'
// 		);
// 	}
// });

// stat方法的参数是一个文件或目录，它产生一个对象，
// 该对象包含了该文件或目录的具体信息。
fs.readdir('/node_guide_demo/', function(err, files){
	if(err){
		console.log(err);
		throw err;
	}

	files.forEach(function(file){
		fs.stat('/node_guide_demo/' + file, function(err, stats){
			if(err){
				console.log(err);
				throw err;
			}
			if(stats.isFile()){
				console.log('%s is file', file);
			}else if(stats.isDirectory()){
				console.log('%s is directory', file);
			}
			console.log('stats:%s',JSON.stringify(stats));
		});
	});
});
