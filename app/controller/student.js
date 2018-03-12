/**
 * 
 */
var Person = require(CORE + 'person');

function Student () {
	Person.call(this);
	this.eat = function () {
		console.log('eat eat ewat ')
	}
}
lib.util.inherits(Student, Person);

Student.prototype.study = function () {
	console.log('i am student')
}
module.exports = Student;