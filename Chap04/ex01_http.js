const { fstat } = require('fs');
var http = require('http')

//#region 1. http 서버 구동 방식
// var server = http.createServer();

// // 클라이언트의 요청이 있으면 발생
// server.on('request', function(req, res){
//     res.write('<h1> Welcom');
//     res.end('to my server');
// })

// server.on('listening', ()=> console.log('8080 포트에서 대기중'))

// server.listen(8080)

//#endregion

//#region 2. http 서버 구동 방식

// var server = http.createServer(function(req, res){
//     res.write('<h1> Welcom');
//     res.end('to my server');
// }).listen(8080, ()=> console.log('8080 포트에서 대기중'))

//#endregion

//#region 3. request, response 메시지
// var server = http.createServer(function(req, res){
//     console.log('req.headers', req.headers)
//     console.log('req.method', req.method)
//     console.log('req.url', req.url)

//     res.statusCode = 200;       //잘 처리됨
//     res.statusMessage = 'OkOk'  
//     res.setHeader('Content-Type', 'text/plane;charset=utf-8')        //한글 안깨지게             // 헤더세팅 우선순위 밀려남
//     res.writeHead(200, 'Okey',{'Content-Type':'text/html;charset=utp-8', 'myName':'subin'})     // 헤더세팅 우선순위

//     res.end('<h1> 안녕하세요 반갑습니다. </h1>')
// }).listen(8080, ()=> console.log('8080 포트에서 대기중'))

//#region 4. html 파일을 응답으로 제공

// var server = http.createServer(function(req, res){
//         res.write('<h1> Welcom');
//         res.end('to my server');
//     }).listen(8080, ()=> console.log('8080 포트에서 대기중'))


//#endregion


//#region 5.html  파일을 응답으로 제공
// var fs = require('fs')
// var server = http.createServer(function(req, res){
//     fs.readFile('./test.html', (err, data)=>{
//         if(err){throw err}

//         res.end(data);
//     })
// }).listen(8080, ()=> console.log('8080 포트에서 대기중'))


//#endregion

//#region 
var fs = require('fs')
var server = http.createServer(function(req, res){
    console.log("req.url", req.rul);
    if(req.url === '/'){
        fs.readFile('./test.html', (err, data)=>{
                    if(err){throw err}
            
                    res.end(data);
                })
    }else if(req.url === '/second'){
        res.write('<h1>Second page</h1>')
        res.end("<h1><a href ='/third'> third page </a></h1>")
    }else if(req.url === '/third'){
        res.write('<h1>Third page</h1>')
        res.end("<h1><a href ='/Second'> Second page </a></h1>")
    }
}).listen(8080, ()=> console.log('8080 포트에서 대기중'))

//#endregion