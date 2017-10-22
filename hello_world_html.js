var http = require("http");

var requestListener = function(request, response) {
	response.writeHead(200, {
		"Content-Type": "text/html"
	});

	response.write('<!Doctype "html"">');
	response.write("<html>");
	response.write("<head>");
	response.write("<title>Node</title>");
	response.write("</head>");
	response.write("<body>");
	response.write("<h1>Hello World!!!!</h1>");
	response.write("</body>");
	response.write("</html>");
	response.end();
};
var server = http.createServer(requestListener);
server.listen(7000);
