var dns = require('dns'),    //DNS查询
	querystring = require('querystring'); //字符串处理
exports.parseDns = function (res, req) {
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