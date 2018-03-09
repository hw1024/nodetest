var http = require('http'),  //服务器创建
	dns = require('dns'),    //DNS查询
	fs = require('fs'),      //文件操作
	url = require('url'),    //url处理
	querystring = require('querystring'); //字符串处理

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	req.setEncoding("utf-8");
	res.writeHead(200, {'Content-Type': 'text/html'});
	router(res, req, pathname);
	// res.end(indexPage);
}).listen(3000, "127.0.0.1");
function router(res, req, pathname) {
	switch (pathname) {
		case "/parse":
			parseDns(res, req)
		break;
		default:
			goIndex(res, req)

	}
}
function goIndex(res, req) {
	var readPath = __dirname + '/' + url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.end(indexPage);
}
function parseDns(res, req) {
	var postData = '';
	req.addListener("data", function(postDataChunk) {
		postData += postDataChunk;
	});
	req.addListener("end", function() {
		var retData = getDns(postData, function(domain, addresses) {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end('<html lang="en">\
					<head>\
						<meta charset="UTF-8">\
					</head>\
					<h1 style="text-align: center;">DNS查询工具</h1>\
					<div style="text-align: center;">\
						Domain:<span style="color:red">'+ domain +'</span>\
						Ip:<span style="color:red">'+ addresses.join(",") +'</span>\
					</div>\
				</html>');
			return;
		})
	})
}
function getDns(postData, callback) {
	var domain = querystring.parse(postData).search_dns;
	dns.resolve(domain, function(err, addresses) {
		if (!addresses) {
			addresses = ['不存在域名']
		}
		callback(domain, addresses)
	});
}
console.log('Server running at http://127.0.0.1:3000/');