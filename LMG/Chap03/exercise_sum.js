var http = require('http');
var url = require('url');
var querystring = require('querystring');

result =0;

var server = http.createServer(function(req, res){
    console.log('req.url : ', req.url);

    var parsedUrl = url.parse(req.url);     // url parsing
    console.log('parsedUrl ', parsedUrl);

    var qs = querystring.parse(parsedUrl.query);  // querystring parsing
    console.log('qs ', qs);

    num1 = parseInt(qs.num1);
    num2 = parseInt(qs.num2)

    console.log("뷁", num1,num2)

    if(num1 && num2){
        console.log("뭐냐")
        for(var i=num1; i<=num2; i++){
            result += i;
        }
        // 302 Found 리다이렉트 상태 응답 코드: 
        // 클라이언트가 요청한 리소스가 Location 헤더에 주어진 URL로 일시적으로 이동되었음
        res.writeHead(302, {'Location': 'http://localhost:8080'});
        console.log(result)
        res.end();
    }else{
        // fs.readFile('./ex02_dramaServer.html', (err, data) =>{
        //     res.end(data);
        // })
        showSumResult(res);  // 결과를 클라이언트로 전송
    }
}).listen(8080, function(){
    console.log('8080 포트에서 대기중');
});

function showSumResult(res){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write(`<html><body><h1>SumResult</h1>`);
    res.write(`---------------------------------------------------
    <h1>두 숫자 사이의 합계 구하기</h1>
    <form method="GET" action="http://localhost:8080">
        <p>start number : <input type="text" name="num1"></p>
        <p>end number : <input type="text" name="num2"></p>
        <input type="submit" value="합계 구하기">
    </form>`)
    res.write(`<h1>result: ${result}</h1>`)
    res.end(`</body></html>`);
}