// 웹 서버를 생성하고 실행합니다.
require('http').createServer(function (request, response) {
    // 요청 매개변수를 추출합니다.
    var query = require('url').parse(request.url, true).query;
    // false - "name=dain" / true - {"name":"dain"}
    
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>' + JSON.stringify(query) + '</h1>');
    
}).listen(1016, function(){ // 서버를 실행합니다.
	console.log('Server Running at localhost:1016');
});