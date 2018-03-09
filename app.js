/**
 * 
 * 设置路径全局变量
 */
global.BASE_DIR = __dirname; //获取本系统的根路径
global.APP = BASE_DIR + "/app/"; //设置app文件夹的路径全局变量
global.CON = APP + "/controller/"; //设置controller文件夹的路径全局变量
global.CORE = APP + "/core/";
global.LIB = BASE_DIR + "/node_modules/";
global.CONF = BASE_DIR + "conf";
global.STATIC = BASE_DIR + "/static/";
global.VIEW = BASE_DIR + "/view/";
/**
 * 
 * modules引入
 */
global.lib = {
	http 		: require('http'),
	fs   		: require('fs'),
	url  		: require('url'),
	dns         : require('dns'),
	querystring : require('querystring'),
	router      : require(CORE + 'router')
}

lib.http.createServer(function(req, res) {
	var pathname = lib.url.parse(req.url).pathname;
	req.setEncoding('utf-8');
	res.writeHead(200, {"Content-Type": "text/html"});
	lib.router.router(res, req, pathname);
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');