var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200);
    req.on('data', function (data) {
        console.log('data', data, data.toString());
        res.write(data);
    });
    req.on('end', function(){
        console.log('end', arguments);
        res.end();
    });
}).listen(3000);
