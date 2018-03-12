/**
 * exports 返回的是一个JSON对象
 * module.exports 可以返回任何的数据格式
 */
module.exports = function () {
	this.name = 'person';
	this.sleep = function () {
		console.log('sleep in the hight')
	}
	this.eat = function () {
		console.log('eat food')
	}
}