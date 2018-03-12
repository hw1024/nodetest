/**
 * module.js
 * exports 和 module.exports的成员为公有成员，其他的为私有成员
 * node.js模块不是类
 */
exports.name = 'danhuang'; //公有成员
var myName = 'licangsg'; //私有成员
exports.init = function (itname) {
	if (!itname) {
		setName(myName)
	} else {
		setName(itname)
	}
} //公有成员
exports.show = function () {
	console.log(name)
} //公有成员
function setName(myName) {
	name = myName
} //私有成员

