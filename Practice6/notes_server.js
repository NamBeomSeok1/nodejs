const http = require('http');
const memos = [];
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    if(req.method==='POST'){
        if(req.url==='/add'){
            req.on('data',(data)=>
            {
                data = data.toString();
                console.log(data)
                memos.push(data);
            })
        }
    }
    
    else if(req.method==="GET"){
        if(req.url==="/list"){
            res.writeHead(200, { 'Content-Type' : 'text/plain' });
                    let string = JSON.stringify(memos);
                    res.write(string);
                    res.end();
                
    }
  }
});

server.listen(80);
  

