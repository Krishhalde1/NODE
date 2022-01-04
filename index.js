var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = 80;
server.listen(port);

const port = 4000;
app.listen(port, () => console.log("Backend : Server connected on port 4000"));
