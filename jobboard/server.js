var libpath = require('path');
    http = require("http");
    fs = require('fs');
    url = require("url");
http.createServer(function (request, response) {

    var uri = url.parse(request.url).pathname;
    var filename = libpath.join(".", uri);

    fs.exists(filename, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                "Content-Type": "text/plain"
            });
            response.write("404 Not Found\n");
            response.end();
            return;
        }

        if (fs.statSync(filename).isDirectory()) {
            filename += '/index.html';
        }

        fs.readFile(filename, "binary", function (err, file) {
            if (err) {
                response.writeHead(500, {
                    "Content-Type": "text/plain"
                });
                response.write(err + "\n");
                response.end();
                return;
            }

            response.write(file, "binary");
            response.end();
        });
    });
}).listen(3000);
// http://localhost:3000/index.html
console.log("Server running on localhost at port " + 3000);
