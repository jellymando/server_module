require('http').createServer(function(request, response) {
    //쿠키를 추출하고 분해합니다.
    var cookie = request.headers.cookie;
    cookie = cookie.split(';').map(function(el){
        var el = el.split('=');
        return {
            key: el[0],
            value: el[1]
        };
    });
    
    //쿠키를 생성합니다.
    response.writeHead(200, {'Content-Type': 'text/html', 'Set-Cookie': ['name = dain', 'age = 30']});
    
    //응답합니다.
    response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(1016, function(){
    console.log('Server Running at localhost:1016');
});