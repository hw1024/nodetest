var fs = require('fs'),      //文件操作
	url = require('url');    //url处理
exports.goIndex = function(res, req) {
	var readPath = __dirname + '/' + url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.end(indexPage);
}