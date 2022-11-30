const fs = require('fs');

const requestHandler = (req, res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My page</title></head>');
        res.write('<body><h1>Hi there</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(req.url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=').slice(1).toString();
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My page</title></head>');
    res.write('<body><h1>Hi there</h1></body>');
    res.write('</html>');
    res.end();
}


module.exports = requestHandler;