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
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:8000")
        response.setHeader("content-type", "text/plain")
        fs.createReadStream("test.txt").pipe(response);
    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(8080);