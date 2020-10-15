const http = require('http');
const moment = require('moment')
const server = http.createServer();


server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == '/echo') {
        let body = [];

        req.on('data', chunk => {
            body.push(chunk)
        })
        .on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            body = Buffer.concat(body).toString();
            let ahora = moment(body, ['MM-DD-YYYY', "YYYY-MM-DD", "DD-MM-YYYY"] );
            let dia = ahora.format('dddd');
            res.end("Usted nació el día: " + dia);
        })
    } else {
        res.statusCode = 404;
        res.end();
    }

})

server.listen(8001);
console.log('Servidor en la url http://localhost:8001');

