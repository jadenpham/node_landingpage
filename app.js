const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
    if(request.url === "/"){
        fs.readFile("index.html", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url ==='/ninjas'){
        fs.readFile("ninjas.html", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url ==="/dojos/new"){
        fs.readFile("dojos.html", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
})

server.listen(6789);