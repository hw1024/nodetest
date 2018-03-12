/**
 * 
 * 设置路径全局变量
 * 不可更改的变量 global全大写字母来存储
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
 * 全局变量使用命名空间
 */
global.lib = {
	http 		: require('http'),
	fs   		: require('fs'),
	url  		: require('url'),
	util        : require('util'),
	dns         : require('dns'),
	querystring : require('querystring'),
	router      : require(CORE + 'router')
}
var Person = require(CORE + 'person'),
	Student = require(CON + 'student'),
	Teacher = require(CON + 'teacher'),
	Coder   = require(CON + 'coder')
var personObj = new Person();
var studentObj = new Student();
var teacherObj = new Teacher();
var coderObj = new Coder();
studentObj.sleep();
studentObj.eat();
studentObj.study();

global.app = lib.http.createServer(function(req, res) {
	var pathname = lib.url.parse(req.url).pathname;
	req.setEncoding('utf-8');
	res.writeHead(200, {"Content-Type": "text/html"});
	lib.router.router(res, req, pathname);
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');