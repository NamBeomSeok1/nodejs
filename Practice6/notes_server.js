const http = require('http');
const memos = [];
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.method === 'POST') {
        if (req.url === '/add') {
            const chunks = [];
            req.on('data', (data) => {
                console.log(data)
                chunks.push(data);
            }).on('end',()=>{
                const fullBody = Buffer.concat(chunks).toString();
                memos.push(fullBody); 
            })
        }
    }

    else if (req.method === "GET") {
        if (req.url === "/list") {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            const string = JSON.stringify(memos);
            res.write(string);
            res.end();

        }
    }
});
        

server.listen(80);
