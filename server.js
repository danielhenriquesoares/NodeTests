var http = require("http"),
fs = require("fs"),
path = require("path");

function requestListener(request, response) {

	var webAppPath = path.join(__dirname, "..", "Node", "WebApp", "index.html"),
	styles = path.join(__dirname, "..", "Node", "WebApp", "css"),
	js = path.join(__dirname, "..", "Node", "WebApp", "js");

	if (request.url === "/index") {
		sendFileContent(response, webAppPath, "text/html");
	} else if (/^\/css\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())) {
		sendFileContent(response, styles + request.url.toString().substring(4), "text/css");
	} else if (/^\/js\/[a-zA-Z0-9\/]*.js$/.test(request.url.toString())) {
		sendFileContent(response, js + request.url.toString().substring(3), "text/javascript");
	} else {
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		response.write("<b>This is the default response. The request url was:"+request.url+"</b>");
		response.end();
	}
	

	console.log("Server running.....");
}

var server = http.createServer(requestListener);
server.listen(8080);

function sendFileContent(response, fileName, contentType){
	console.log(fileName);
	fs.readFile(fileName, function(err, data){
		if(err){
		  response.writeHead(404);
		  response.write("Not Found!");
		}
		else{
		  response.writeHead(200, {'Content-Type': contentType});
		  response.write(data);
		}
		response.end();
	});
}
