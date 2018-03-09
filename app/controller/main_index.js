exports.goIndex = function(res, req) {
	var readPath = lib.url.parse(VIEW + 'index.html').pathname;
	var indexPage = lib.fs.readFileSync(readPath);
	res.end(indexPage);
}