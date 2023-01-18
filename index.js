const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    request.on('error', (err) => {
        console.error(err);
        response.statusCode(400)
        response.end();
    });
    response.on('error', (err) => {
        console.error(err);
    });
    if (request.method === 'POST' && request.url === '/file') {
        const fs = require('fs');

        fs.readFile('test.txt', 'utf8', (err, data) => {
            if (err) {
                console.log("error", err)
                response.setHeader("Access-Control-Allow-Origin", "http://localhost:8000")
                response.setHeader("content-type", "text/plain")
                // request.pipe(response);
                response.end(err)
            }
            response.setHeader("Access-Control-Allow-Origin", "http://localhost:8000")
            response.setHeader("content-type", "text/plain")
            // request.pipe(response);
            response.end(data)
        });

    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(8080);