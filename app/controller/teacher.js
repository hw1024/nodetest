/**
 * 
 */
var Person = require(CORE + "person");
function Teacher () {
	Person.call(this)
}
lib.util.inherits(Teacher, Person);

Teacher.prototype.teach = function () {
	console.log('i am teacher')
}

module.exports = Teacher;