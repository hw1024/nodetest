/**
 * @type class Note
 * @author hw
 * @time 2018-02-12
 * @desc
 * @param 
 */
var ParseDns = require(CON + 'parse_dns.js'),
	MainIndex = require(CON + 'main_index.js');
exports.router = function(res, req, pathname) {
	switch (pathname) {
		case "/parse":
			ParseDns.parseDns(res, req)
		break;
		default:
			MainIndex.goIndex(res, req)

	}
}