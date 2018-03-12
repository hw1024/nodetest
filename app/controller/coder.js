/**
 * 
 */
var Person = require(CORE + "person");
function Coder () {
	Person.call(this)
}
lib.util.inherits(Coder, Person)

Coder.prototype.code = function () {
	console.log('i am coder')
}
module.exports = Coder;