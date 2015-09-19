var http = require('http');
var franc = require('franc');
var qs = require('querystring');

const PORT=8023; 

function handleRequest(request, response){
    var body = "";
    request.on('data', function (chunk) {
        body += chunk;
    });
    request.on('end', function () {
        response.writeHead(200);
        response.end(JSON.stringify(franc.all(body)));
    });
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
