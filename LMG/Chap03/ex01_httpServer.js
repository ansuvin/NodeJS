var http = require('http');
var fs = require('fs');

//#region 3. request, response 메시지 살펴보기
var server = http.createServer(function(req, res){
    console.log('req.headers', req.headers);
    console.log('req.method', req.method);  // GET
    console.log('req.url', req.url);  // /, /favicon.ico
    
    res.statusCode = 200;
    res.statusMessage = 'Okey';
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //res.writeHead(200, 'OKOK', {'Content-Type': 'text/plain;charset=utf-8', 'myName': 'dongyun'});
    res.end('<h1>안녕하세요</h1>');
  }).listen(8080, function(){
    console.log('8080 포트에서 대기중');
  });
  //#endregion