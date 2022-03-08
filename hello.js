const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Ola mundo\n');
});


server.listen(port, hostname, function(){
    console.log(`Servidor rodando em http://${hostname}:${port}/`)
})